import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./page.css";
import { Link } from "react-router-dom";
import FormData from "form-data";

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 9,
      currentPage: 0,
      search:null,
      page : ''
   
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }


  receivedData() {
    axios
      .get(`http://127.0.0.1/ReactProject/project7/src/Component/shop.php`)
      .then((res) => {
        const data = res.data;
        //console.log(data);
        localStorage.setItem("products", JSON.stringify(data));
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((pd) => (
            <div
              className="col-lg-4 col-sm-5 btn  mb-3 d-flex flex-column align-items-center"
              key={pd.product_id}>
              <Link to={"/single-product/" + pd.product_id}>
                <div className="row ">
                  <div className="">
                    <div
                      className="card"
                      style={{ width: "15rem", border: "none" }} >
                      <img width="100%" height="200px" src={pd.image} className="card-img-top" alt={pd.product_name} />
                      <div className="text-black">
                        <h5 className="card-title text-black">{pd.product_name}</h5>
                       <strong className="h4">£ {pd.product_price}</strong> 
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
        
        ));


        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData,
        });
      });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    if(this.state.search === null){
      this.receivedData();
    };
 
  }

  render() {
    let product = JSON.parse(localStorage.getItem("products"));

    const items = product.filter((data)=>{
      if(this.state.search == null)
      return    this.state.page
       else if(data.product_name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div  className="border">
        <ul className='list-group'>
    
          <Link to={"/single-product/" +data.product_id}>
          <li style={{position:'relative',left:'0vh'}} className="list-group-item">
            {data.product_name}
          </li>
         </Link>
        </ul>
      </div>
      )
    })

    return (
      <div>
        <div className="site-wrap">
          <div className="bg-light py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-0">
                <Link to="/">Home</Link>
                  <span className="mx-2 mb-0">/</span>{" "}
                  <strong className="text-black">Shop</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container  m-auto">
              <div className="row mb-5 m-auto">
                <div className="col-md-12 ">
                  <div className="row">
                    <div className="col-md-12 mb-5">
                      <div className="float-md-left mb-4">
                       
                          <form action="" className="site-block-top-search">
                            <span className="icon icon-search2"></span>
                            <input
                              type="text"
                              className="form-control border-0"
                              placeholder="Search"
                              onChange={(e)=>this.searchSpace(e)}
                            />
                            {items}
                          </form>
                     
                      </div>
                    </div>
                  </div>

                  <div  className="row">
                    <div className="col-md-12 text-center d-flex flex-column">
                      <div className="d-flex flex-wrap justify-content-between">
                        {this.state.postData}
                      </div>
                      <div className="align-self-center ">
                        <ReactPaginate
                          previousLabel={"prev"}
                          nextLabel={"next"}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={this.state.pageCount}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={this.handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Shop;

import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./page.css";
import { Link } from "react-router-dom";

class Shop extends Component {
  // pageCount = this.props.item? Math.ciel(this.props.item.length)/10 : 0 ;

  // constructor(props) {
  //   super(props);
  // }

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 9,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  //  pageCount = this.props.item ? this.props.item.length/this.state.perPage : 0 ;

  receivedData() {
    axios
      .get(`http://127.0.0.1/ReactProject/project7/src/Component/shop.php`)
      .then((res) => {
        const data = res.data;
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((pd) => (
          <React.Fragment>
            <div
              class="col-lg-4 col-sm-5  mb-3 d-flex flex-column justify-content-center"
              key={pd.product_id}
            >
              <Link to={"/single-product/" + pd.product_id}>
                <div class="row ">
                  <div class="">
                    <div class="card border-0" style={{ width: "15rem" }}>
                      <img src={pd.image} class="card-img-top" alt="..." />
                      <div>
                        <h5 class="card-title">{pd.product_name}</h5>
                        <p>{pd.product_description}</p>
                        {pd.product_price}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </React.Fragment>
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
    this.receivedData();
  }

  render() {
    return (
      <div>
        <div className="site-wrap">
          <div className="bg-light py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-0">
                  <a href="index.html">Home</a>{" "}
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
                            />
                          </form>
                     
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="d-flex flex-wrap justify-content-between">
                        {this.state.postData}
                      </div>
                      <div className="m-auto w-50">
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

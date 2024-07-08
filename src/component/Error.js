import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      {/* <h1>No Data found 404</h1> */}
      {/* <div class="col-md-12 text-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
            Sorry, the page you are looking
            for does not exist.
        </p>
    </div> */}

 

<section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
            {/* <span class="display-1 fw-bold">4</span>
            <span class="display-1 fw-bold bsb-flip-h">4</span> */}
            <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
          </h2>
          <h3 class="h2 mb-2">No data found</h3>
            <p class="mb-5">Data has not been added or has been deleted</p>
          <Link class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" to="/" role="button">Back</Link>
        </div>
      </div>
    </div>
  </div>
</section>







    </div>
  )
}

<template>
<!-- Review Section -->
<div id="reviewSection" class="container space-bottom-2 space-bottom-lg-3">
  <div class="row">
    <div class="col-lg-4 mb-7 mb-lg-0">
      <div class="border-bottom pb-4 mb-4">
        <!-- Overall Rating Stats -->
        <div class="card border-0 bg-primary text-white p-4 mb-3">
          <div class="d-flex justify-content-center align-items-center">
            <span class="display-4 font-weight-semi-bold">4.7</span>
            <div class="ml-3">
              <div class="small">
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="far fa-star"></small>
              </div>
              <span class="font-weight-normal"><strong>287</strong> reviews</span>
            </div>
          </div>
        </div>
        <!-- End Overall Rating Stats -->

        <h3 class="h4">Rating breakdown</h3>

        <!-- Ratings -->
        <ul class="list-unstyled">
          <li class="py-1">
            <a class="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
              <div class="col-3">
                <span class="text-dark">5 stars</span>
              </div>
              <div class="col-7">
                <div class="progress" style="height: 4px;">
                  <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-2 text-right">
                <span class="text-secondary">205</span>
              </div>
            </a>
          </li>
          <li class="py-1">
            <a class="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
              <div class="col-3">
                <span class="text-dark">4 stars</span>
              </div>
              <div class="col-7">
                <div class="progress" style="height: 4px;">
                  <div class="progress-bar" role="progressbar" style="width: 53%;" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-2 text-right">
                <span class="text-secondary">55</span>
              </div>
            </a>
          </li>
          <li class="py-1">
            <a class="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
              <div class="col-3">
                <span class="text-dark">3 stars</span>
              </div>
              <div class="col-7">
                <div class="progress" style="height: 4px;">
                  <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-2 text-right">
                <span class="text-secondary">23</span>
              </div>
            </a>
          </li>
          <li class="py-1">
            <a class="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
              <div class="col-3">
                <span class="text-dark">2 stars</span>
              </div>
              <div class="col-7">
                <div class="progress" style="height: 4px;">
                  <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-2 text-right">
                <span class="text-secondary">0</span>
              </div>
            </a>
          </li>
          <li class="py-1">
            <a class="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
              <div class="col-3">
                <span class="text-dark">1 stars</span>
              </div>
              <div class="col-7">
                <div class="progress" style="height: 4px;">
                  <div class="progress-bar" role="progressbar" style="width: 1%;" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-2 text-right">
                <span class="text-secondary">4</span>
              </div>
            </a>
          </li>
        </ul>
        <!-- End Ratings -->
      </div>

      <span class="d-block display-4 font-weight-medium">77%</span>
      <p class="small">of customers recommend this product</p>
    </div>

    <div class="col-lg-8">
      <div class="pl-lg-4">
        <!-- Title -->
        <div class="border-bottom pb-4 mb-4">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="h5 text-secondary font-weight-normal mb-0">Sort on</h3>

            <!-- Select -->
            <select class="js-select selectpicker dropdown-select"
                    data-size="10"
                    data-width="fit"
                    data-style="btn-soft-secondary btn-xs">
              <option value="mostRecent" selected>Most recent</option>
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
            <!-- End Select -->
          </div>
        </div>
        <!-- End Title -->

        <!-- Review -->
        <div class="border-bottom pb-4 mb-4">
          <!-- Review Rating -->
          <div class="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-3">
            <div class="text-warning">
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
            </div>
            <span>April 3, 2019</span>
          </div>
          <!-- End Review Rating -->

          <h4 class="h6 font-weight-semi-bold text-uppercase">I jus love it!</h4>
          <p>I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a “mens” hat.</p>

          <!-- Reviewer -->
          <div class="text-secondary font-size-1 mb-2">
            <strong class="text-dark">Hailey</strong>
            <span>- Verified Purchase</span>
          </div>
          <!-- End Reviewer -->

          <!-- Helpful -->
          <div class="font-size-1">
            <span>Was this helpful?</span>
            <span class="ml-2">
              <a class="link-muted" href="javascript:;">Yes</a>
              <span class="text-secondary">(45)</span>
            </span>
            <span class="ml-2">
              <a class="link-muted" href="javascript:;">No</a>
              <span class="text-secondary">(21)</span>
            </span>
          </div>
          <!-- End Helpful -->
        </div>
        <!-- End Review -->
        <div class="d-sm-flex justify-content-sm-end">
          <a class="btn btn-soft-primary btn-pill transition-3d-hover px-5 mb-2 mr-3" href="#">Read More</a>
          <button type="button" class="btn btn-primary btn-pill transition-3d-hover px-5 mb-2">Write a Review</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End Review Section -->
</template>
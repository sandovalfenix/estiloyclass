<template>
  <!-- Hero Section -->
  <div class="container space-top-1 space-top-sm-2">
    <div class="row">
      <div class="col-lg-7 mb-7 mb-lg-0">
        <div class="pr-lg-4">
          <div class="position-relative">
            <!-- Main Slider -->
            <div id="heroSlider" class="js-slick-carousel u-slick border rounded"
                data-fade="true"
                data-infinite="true"
                data-autoplay-speed="7000"
                data-arrows-classes="d-none d-sm-inline-block u-slick__arrow u-slick__arrow--flat-white content-centered-y shadow-soft rounded-circle"
                data-arrow-left-classes="fas fa-arrow-left u-slick__arrow-inner u-slick__arrow-inner--left ml-3"
                data-arrow-right-classes="fas fa-arrow-right u-slick__arrow-inner u-slick__arrow-inner--right mr-3"
                data-nav-for="#heroSliderNav">
              <div class="js-slide">
                <img class="img-fluid w-100 rounded" src="/assets/img/600x600/img12.jpg" alt="Image Description">
              </div>
              <div class="js-slide">
                <img class="img-fluid w-100 rounded" src="/assets/img/600x600/img13.jpg" alt="Image Description">
              </div>
              <div class="js-slide">
                <img class="img-fluid w-100 rounded" src="/assets/img/600x600/img14.jpg" alt="Image Description">
              </div>
            </div>
            <!-- End Main Slider -->

            <!-- Slider Nav -->
            <div class="position-absolute bottom-0 right-0 left-0 px-4 py-3">
              <div id="heroSliderNav" class="js-slick-carousel u-slick u-slick--gutters-1 u-slick--transform-off max-width-27 mx-auto"
                  data-slides-show="3"
                  data-infinite="true"
                  data-autoplay-speed="7000"
                  data-is-thumbs="true"
                  data-is-thumbs-progress="true"
                  data-thumbs-progress-options='{
                    "color": "#377DFF",
                    "width": 8
                  }'
                  data-thumbs-progress-container=".js-slick-thumb-progress"
                  data-nav-for="#heroSlider">
                <div class="js-slide p-1">
                  <a class="js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1" href="javascript:;">
                    <img class="img-fluid rounded-circle" src="/assets/img/100x100/img16.jpg" alt="Image Description">
                  </a>
                </div>
                <div class="js-slide p-1">
                  <a class="js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1" href="javascript:;">
                    <img class="img-fluid rounded-circle" src="/assets/img/100x100/img17.jpg" alt="Image Description">
                  </a>
                </div>
                <div class="js-slide p-1">
                  <a class="js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1" href="javascript:;">
                    <img class="img-fluid rounded-circle" src="/assets/img/100x100/img18.jpg" alt="Image Description">
                  </a>
                </div>
              </div>
            </div>
            <!-- End Slider Nav -->
          </div>
        </div>
      </div>

      <!-- Product Description -->
      <div class="col-lg-5">
        <!-- Rating -->
        <div class="d-flex align-items-center small mb-2">
          <div class="text-warning mr-2">
            <small class="fas fa-star"></small>
            <small class="fas fa-star"></small>
            <small class="fas fa-star"></small>
            <small class="fas fa-star"></small>
            <small class="fas fa-star"></small>
          </div>
          <a class="js-go-to link-muted" href="#reviewSection"
            data-target="#reviewSection"
            data-compensation="#header"
            data-type="static">Read all 287 reviews</a>
        </div>
        <!-- End Rating -->

        <!-- Title -->
        <div class="mb-5">
          <h1 class="h3 font-weight-medium">New Era 9Forty LA Dodgers adjustable cap in black</h1>
          <p>American label New Era manufacturing baseball hats for teams since the 1930s.</p>
        </div>
        <!-- End Title -->

        <!-- Price -->
        <div class="mb-5">
          <h2 class="font-size-1 text-secondary font-weight-medium mb-0">Total price:</h2>
          <span class="font-size-2 font-weight-medium">$159.99</span>
          <span class="text-secondary ml-2"><del>$179.99</del></span>
        </div>
        <!-- End Price -->

        <!-- Quantity -->
        <div class="border rounded py-2 px-3 mb-3">
          <div class="js-quantity row align-items-center">
            <div class="col-7">
              <small class="d-block text-secondary font-weight-medium">Select quantity</small>
              <input class="js-result form-control h-auto border-0 rounded p-0" type="text" value="1">
            </div>
            <div class="col-5 text-right">
              <a class="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle" href="javascript:;">
                <small class="fas fa-minus btn-icon__inner"></small>
              </a>
              <a class="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle" href="javascript:;">
                <small class="fas fa-plus btn-icon__inner"></small>
              </a>
            </div>
          </div>
        </div>
        <!-- End Quantity -->

        <!-- Accordion -->
        <div id="shopCartAccordion" class="accordion mb-5">
          <!-- Card -->
          <div class="card">
            <div class="card-header card-collapse" id="shopCardHeadingOne">
              <h3 class="mb-0">
                <button type="button" class="btn btn-link btn-block card-btn collapsed"
                        data-toggle="collapse"
                        data-target="#shopCardOne"
                        aria-expanded="false"
                        aria-controls="shopCardOne">
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span id="icon65" class="svg-preloader ie-height-48 w-100 max-width-6 mr-3">
                          <img class="js-svg-injector" src="/assets/svg/icons/icon-65.svg" alt="SVG"
                              data-parent="#icon65">
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-medium">Free shipping</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </span>
                  </span>
                </button>
              </h3>
            </div>
            <div id="shopCardOne" class="collapse" aria-labelledby="shopCardHeadingOne" data-parent="#shopCartAccordion">
              <div class="card-body">
                <p class="small mb-0">We offer free shipping anywhere in the U.S. A skilled delivery team will bring the boxes into your office.</p>
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card">
            <div class="card-header card-collapse" id="shopCardHeadingTwo">
              <h4 class="mb-0">
                <button type="button" class="btn btn-link btn-block card-btn collapsed"
                        data-toggle="collapse"
                        data-target="#shopCardTwo"
                        aria-expanded="false"
                        aria-controls="shopCardTwo">
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span id="icon64" class="svg-preloader ie-height-48 w-100 max-width-6 mr-3">
                          <img class="js-svg-injector" src="/assets/svg/icons/icon-64.svg" alt="SVG"
                              data-parent="#icon64">
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-medium">30 Days return</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </span>
                  </span>
                </button>
              </h4>
            </div>
            <div id="shopCardTwo" class="collapse" aria-labelledby="shopCardHeadingTwo" data-parent="#shopCartAccordion">
              <div class="card-body">
                <p class="small mb-0">If you're not satisfied, return it for a full refund. We'll take care of disassembly and return shipping.</p>
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Accordion -->

        <div class="mb-4">
          <button type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">Add to Cart</button>
        </div>

        <!-- Help Link -->
        <div class="media align-items-center">
          <span id="icon4" class="svg-preloader ie-height-48 w-100 max-width-6 mr-2">
            <img class="js-svg-injector" src="/assets/svg/icons/icon-4.svg" alt="SVG"
                data-parent="#icon4">
          </span>
          <div class="media-body text-secondary small">
            <span class="font-weight-medium mr-1">Need Help?</span>
            <a class="link-muted" href="#">Chat now</a>
          </div>
        </div>
        <!-- End Help Link -->
      </div>
      <!-- End Product Description -->
    </div>
  </div>
  <!-- End Hero Section -->
</template>
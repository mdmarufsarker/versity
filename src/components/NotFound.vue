<template>
  <section class="page_404 mx-auto w-auto flex flex-col">
    <!-- Page breadcrumb -->
    <section id="mu-page-breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mu-page-breadcrumb-area">
              <h2>404</h2>
              <ol class="breadcrumb">
                <li><a href="#">Home</a></li>
                <li class="active">404</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End breadcrumb -->

    <!-- Start error section  -->
    <section id="mu-error">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mu-error-area">
              <p>Oops! The page you requested was not found!</p>
              <span
                >The page you are looking for is not available or has been
                removed or changed.</span
              >
              <h2>404</h2>
              <a class="mu-post-btn" href="index.html">GO TO HOME</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End error section  -->
  </section>
</template>

<script>
import Four_O_Four from "../assets/Four_O_Four.gif";
import arrow from "../assets/double-arrow.png";
export default {
  name: "NotFound",
  data() {
    return {
      Four_O_Four,
      arrow,
    };
  },
};
</script>

<style>
/*======================
    404 page
=======================*/
img {
  width: 40%;
}
.suggestions1 {
  margin-top: -70px;
}
.suggestions2 {
  margin-bottom: 22px;
}
</style>

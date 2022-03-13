<template>
  <!-- Start header  -->
  <header id="mu-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-header-area">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="mu-header-top-left">
                  <div class="mu-top-email">
                    <i class="fa fa-envelope"></i>
                    <span>info@markups.io</span>
                  </div>
                  <div class="mu-top-phone">
                    <i class="fa fa-phone"></i>
                    <span>(568) 986 652</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="mu-header-top-right">
                  <nav>
                    <ul class="mu-top-social-nav">
                      <li>
                        <a href="#"><span class="fa fa-facebook"></span></a>
                      </li>
                      <li>
                        <a href="#"><span class="fa fa-twitter"></span></a>
                      </li>
                      <li>
                        <a href="#"><span class="fa fa-google-plus"></span></a>
                      </li>
                      <li>
                        <a href="#"><span class="fa fa-linkedin"></span></a>
                      </li>
                      <li>
                        <a href="#"><span class="fa fa-youtube"></span></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End header  -->
  <!-- Start menu -->
  <section id="mu-menu">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <!-- FOR MOBILE VIEW COLLAPSED BUTTON -->
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- LOGO -->
          <!-- TEXT BASED LOGO -->
          <a class="navbar-brand" href="index.html"
            ><i class="fa fa-university"></i><span>Varsity</span></a
          >
          <!-- IMG BASED LOGO  -->
          <!-- <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="logo"></a> -->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul id="top-menu" class="nav navbar-nav navbar-right main-nav">
            <li class="active"><a href="index.html">Home</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                >Course <span class="fa fa-angle-down"></span
              ></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="course.html">Course Archive</a></li>
                <li><a href="course-detail.html">Course Detail</a></li>
              </ul>
            </li>
            <li><a href="gallery.html">Gallery</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                >Blog <span class="fa fa-angle-down"></span
              ></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="blog-archive.html">Blog Archive</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="404.html">404 Page</a></li>
            <li>
              <a href="#" id="mu-search-icon"><i class="fa fa-search"></i></a>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
  </section>
  <!-- End menu -->
  <!-- Start search box -->
  <div id="mu-search">
    <div class="mu-search-area">
      <button class="mu-search-close"><span class="fa fa-close"></span></button>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form class="mu-search-form">
              <input
                type="search"
                placeholder="Type Your Keyword(s) & Hit Enter"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End search box -->

  <!-- <header class="px-8 py-4 bg-indigo-600 text-white sticky top-0">
    <nav class="navbar flex justify-between">
      <div class="logo flex my-auto">
        <img src="../assets/logo.png" alt="" class="w-10" />
        <router-link to="/" class="font-bold px-4 text-3xl">Logo</router-link>
      </div>
      <ul class="flex justify-between my-auto">
        <li class="bg-indigo-600 rounded tracking-wider font-bold">
          <router-link
            class="mx-2 px-4 py-2 rounded bg-slate-100 text-indigo-600 hover:bg-slate-200"
            v-for="item in links"
            :key="item.to"
            :to="item.to"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header> -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "About",
          to: "/about",
        },
        {
          title: "Projects",
          to: "/projects",
        },
        {
          title: "Achievements",
          to: "/achievements",
        },
        {
          title: "Contact",
          to: "/contact",
        },
      ],
    };
  },
};
</script>

<style></style>

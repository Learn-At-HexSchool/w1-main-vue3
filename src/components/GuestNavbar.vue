<template>
  <nav
    class="navbar navbar-light bg-light sticky-top navbar-expand-lg"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >首頁</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5
            id="offcanvasNavbarLabel"
            class="offcanvas-title"
          >
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <!-- links -->
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/"
              >
                Home
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/about"
              >
                About
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/admin/products"
              >
                Admin
              </router-link>
            </li>
            <!-- dropdown -->
            <!-- <li class="nav-item dropdown">
              <a
                id="offcanvasNavbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="offcanvasNavbarDropdown"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Action</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Another action</a>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Something else here</a>
                </li>
              </ul>
            </li> -->
          </ul>

          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
            <button
              class="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form> -->
        </div>
        <!-- end of offcanvas-body -->
      </div>
      <!-- end of offcanvasNavbar -->
    </div>
    <!-- end of container -->
  </nav>
</template>

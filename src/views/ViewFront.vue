<template>
  <div class="front">
    <GuestNavbar />
    <h1 class="text-warning">
      View Front
    </h1>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import GuestNavbar from "@/components/GuestNavbar.vue";

export default {
  name: "Admin",
  components: {
    GuestNavbar,
  },
};
</script>

<template>
  <div class="admin">
    <AdminNavbar />
    <h1>Admin page</h1>
    <router-view />
  </div>
</template>

<script>
import AdminNavbar from "@/components/AdminNavbar.vue";

export default {
  name: "Admin",
  components: {
    AdminNavbar,
  },
};
</script>

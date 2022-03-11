<template>
  <div class="desk">
    <h2>Desk</h2>
    <AdminLogin />
  </div>
</template>

<script>
import AdminLogin from "@/components/AdminLogin.vue";

export default {
  name: "AdminDesk",
  components: {
    AdminLogin,
  },
};
</script>

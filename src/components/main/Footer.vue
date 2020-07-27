<template>
  <footer class="footer">
    <p>&copy; Uziel Meliton Hernandez Hdez.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  width: 100%;
  height: 60px;
  margin-top: 100px;
  box-shadow: 1px -4px 17px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  text-align: center;

  z-index: 120;
}

.footer > p {
  color: #555;
  line-height: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
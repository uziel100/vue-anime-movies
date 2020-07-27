<template>
  <div>
    <div style="margin-top:100px" class="ph-item">
      <div class="ph-col-4 flex-box" style="height: 400px">
        <div class="ph-picture"></div>
      </div>
      <div class="ph-col-8">
        <div class="ph-row">
          <div class="ph-col-6 big"></div>
          <div class="ph-col-6 empty big"></div>
          <div class="ph-picture ph-col-10 picture-1"></div>
          <div class="ph-col-4 big"></div>
          <div class="ph-col-8 empty big"></div>
          <div class="ph-col-4"></div>
          <div class="ph-col-8 empty"></div>
          <div class="ph-col-6"></div>
          <div class="ph-col-6 empty"></div>
          <div class="ph-col-10"></div>
          <div class="ph-col-2 empty"></div>
          <div class="ph-col-8"></div>
          <div class="ph-col-4 empty"></div>
          <div class="ph-col-7"></div>
          <div class="ph-col-5 empty"></div>
          <div class="ph-col-6"></div>
          <div class="ph-col-6 empty"></div>
          <div class="ph-col-4"></div>

          <div class="ph-col-8 empty"></div>
          <div class="ph-col-12"></div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
};
</script>

<style scoped>
.ph-item {
  height: auto;
}

.box-ph {
  height: 250px;
}

.picture-1 {
  /* height: 30px */
}

.ph-picture {
  height: 100%;
}

@media screen and (max-width: 780px) {
  .ph-item {
    height: 250px;
  }

  .picture-1 {
    height: 100px;
  }
}

@media screen and (max-width: 561px) {
  .flex-box {
    flex-basis: 100%;
  }
}
</style>
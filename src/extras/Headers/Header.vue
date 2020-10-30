<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="texto_left">
            <img src="../../assets/img/twitterlogo.png" height="50" width="50">
            Twooter
          </div>
        </div>
        <div class="col">
          <div class="texto_right">
            @JesusMarroquin
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
name: "Header",

}
</script>

<style scoped>
.texto_left{
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
  font-family: "Helvetica Neue";
  font-size: 1.5em;
  font-weight: 600;
  color: white;
}
.texto_right{
  margin-top: 13px;
  margin-bottom: 5px;
  margin-right: 10px;
  text-align: right;
  font-family: "Helvetica Neue";
  font-size: 1.5em;
  font-weight: 600;
  color: white;
}
</style>
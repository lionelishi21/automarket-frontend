<template>
<div class="card">
  <header>
    <img src="@/assets/automarket.png">
      <div>
      <h3><strong>{{name}}</strong></h3>
      <h5>AM Auto Rep</h5>
    </div>
  </header>
  <nav>
    <ul>
      <li><strong>Phone:</strong><a href="https://twitter.com/fredddieq" target="_blank">{{phone}}</a></li>
      <li><strong>Email:</strong><a href="https://twitter.com/fredddieq" target="_blank">{{email}}</a></li>
      <li><strong>Homepage:</strong><a href="https://twitter.com/fredddieq" target="_blank">automarketjm.com/autorep-rep/{{uuid}}</a></li>
    </ul>
  </nav>
  
</div>
</template>
<script>
export default {
	props:['name', 'number','email', 'phone', 'uuid']	
}
</script>
<style lang="scss" scoped>
	.card {
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  border-radius: 10px;
  margin: 2rem;
  max-width: 100%;
  min-height: 300px;
  padding: 2.5rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transition: ease 1s;
  transition: ease 1s;
}
.card:after {
  content: "";
  display: block;
  width: 260px;
  height: 200px;
  background: #f4f7f7;
  border-radius: 100%;
  position: absolute;
  right: -20px;
  bottom: -80px;
  z-index: -1;
}
.card header {
  -webkit-box-align: start;
          align-items: flex-start;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.card img {
  border-radius: 6px;
  width: 150px;
  height: 50px;
}
.card h1 {
  font-weight: 700;
  margin: 0 0 1rem;
}
.card h3 {
  font-weight: 400;
  margin: 0;
}
.card nav {
  -webkit-box-align: center;
          align-items: center;
  bottom: 40px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
          justify-content: space-between;
  left: 40px;
  position: absolute;
}
.card nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.card nav ul li {
  display: table-row;
}
.card nav ul a {
  display: table-cell;
  text-decoration: none;
  color: #535c68;
  padding: 0.3rem 2.5rem;
}

</style>
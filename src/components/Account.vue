<template @resize="removemenu">
  <div class="hello"  @resize="removemenu">
  <div @click="removemenu" class="blur" id="blur"></div>
  <!-- <div @click="removemenu" class="blur2" id="blur2"></div>

  <div class="price">
    <h1 class="price">Prices</h1>
    <ol class="price">
      <li>Saden R60</li>
      <li>Single Cap van</li>
      <li>double Cap van</li>
      <li>Mini bus *Taxi</li>
    </ol>
  </div> -->
    <div class="navbar" style="position: -webkit-sticky;  position: sticky; top: 0;  z-index: 5;">
        <div class="container">
            <a class="logo" href="#">SOLAR INSTALL</a>
            <img @click="addmenu"  class="mobile-menu" src="../assets/menu.svg" alt="Open Navigation">
            <nav id="mysidebar">
                <img @click="removemenu" id="mobile-exit" class="mobile-menu-exit" src="../assets/exit.svg" alt="Close Navigation">
                <ul class="primary-nav">
                  <li ><a href="https://solarinstalls.web.app/#/">Home</a></li>
                </ul>

                <ul class="secondary-nav">
                    <li><a @click="directto2('contact')">Contact</a></li>
                    <li class="current" ><a @click="removemenu">Account</a></li>
                    <!-- li class="go-premium-cta"><a href="https://brajoecarwash.co.za/#/login">Log in</a></li>
                    <li class="go-premium-cta"><a href="https://brajoecarwash.co.za/#/signup">Sign up</a></li> -->
                </ul>
            </nav>
        </div>
    </div>

    <section class="hero2">
        <div class="container">
            <div class="left-col">
               <div class="contact-left">
                <h2>Login</h2>

                <form id="registerid" onsubmit="return false">
                  <div id="suggestions" class="suggestions">
                    <!--<label for="name">Name</label>
                    <input type="text" v-model= "signname" id="name" name="name" required oninvalid="this.setCustomValidity('Enter Name')" oninput="this.setCustomValidity('')">

                    <label for="surname">Surname</label>
                    <input type="text" v-model= "signsurname" id="surname" name="surname" required oninvalid="this.setCustomValidity('Enter Surname')" oninput="this.setCustomValidity('')"> -->

                    <label for="email">Email</label>
                    <input type="email" v-model= "signemail" id="email" name="email" required oninvalid="this.setCustomValidity('Enter Valid Email')" oninput="this.setCustomValidity('')">

                    <label for="password">Password</label>
                    <input type="password" v-model= "signupPass" id="pass" name="pass" required oninvalid="this.setCustomValidity('Passwords don't correspond')" oninput="this.setCustomValidity('')">

                    <!--<label for="conpassword">Confirm Password</label>
                    <input type="password" v-model= "signupPassCon" id="passcon" name="passcon" required oninvalid="this.setCustomValidity('Passwords don't correspond')" oninput="this.setCustomValidity('')"> -->

                    <input id="sendesugg" type="button" @click="login"  class="send-message-cta" value="Login" >
                  </div>
                </form>
            </div>
            </div>
        </div>
    </section>
        <!-- <section class="hero12">
        <div class="container" id ="maindev">
            <div class="left-col">
              <img src="../assets/IMG_2436.jpg" width='100%' class="hero-img2" loading="lazy"  alt="Illustration">
            </DIV>
            <div class="left-col">
              <img src="../assets/IMG_1620.jpg" width='100%' class="hero-img2" loading="lazy"  alt="Illustration">
            </DIV>
            <div class="left-col">
              <img src="../assets/IMG_1348.jpg" width='100%' class="hero-img2" loading="lazy"  alt="Illustration">
            </DIV>
            <div class="left-col">
              <img src="../assets/IMG_1365.jpg" width='100%' class="hero-img2" loading="lazy"  alt="Illustration">
            </DIV>
            <div class="left-col">
              <img src="../assets/IMG_2090.jpg" width='100%' class="hero-img2" loading="lazy"  alt="Illustration">
            </DIV>
            <div class="left-col">
              <img src="../assets/IMG_1621.jpg" width='100%' class="hero-img2" loading="lazy"  alt="Illustration">
            </DIV>
        </div>
    </section>-->

<!-- <div style="text-align:center">
  <span class="dot" @click="currentSlide(1)"></span>
  <span class="dot" @click="currentSlide(2)"></span>
  <span class="dot" @click="currentSlide(3)"></span>
</div> -->
   <!-- <section class="testimonials-section">
        <div class="container">
            <ul>
                <li>
                    <img src="../assets/kb.jpg" alt="Person">

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
                <li>
                    <img src="../assets/kb.jpg" alt="Person">

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
                <li>
                    <img src="../assets/kb.jpg" alt="Person">

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
            </ul>
        </div>
    </section> -->
            <!-- <div class="foots">
    <app-footer/>
    </div> -->
    <div class="feet">
    <h5 style="text-align:center">Copyright © 2023 All Rights Reserved. Designed by <a href="">Kabelo</a> </h5>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import swal from 'sweetalert'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  /* unmounted () {
    window.removeEventListener('resize', this.removemenu)
  }, */
  methods: {
    directto2 (n) {
      window.location.href = `https://solarinstalls.web.app/#/${n}` // `http://localhost:8080/#/${n}`
      // window.location.href = `http://localhost:8080/#/${n}`
    },
    direct () {
      window.location.href = 'https://kabelodatabase.herokuapp.com'
    },
    addmenu () {
      document.querySelector('nav').classList.add('menu-btn')
      document.getElementById('blur').style.width = '100%'
    },
    removemenu () {
      document.getElementById('blur').style.width = '0%'
      document.querySelector('nav').classList.remove('menu-btn')
    }
  },
  beforeMount () {
    // this.rerun()
  },
  mounted () {
    window.addEventListener('resize', this.removemenu)
    // create a cookie that will help us coont number of page visits.
    let coo = ''
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf('logsbrajoe=') === 0) {
        coo = c.substring('logsbrajoe=', c.length)
      }
    }
    if (coo.length <= 1) {
      this.count()
      const d = new Date()
      d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000))
      d.setUTCHours(0, 0, 0)
      let expires = 'expires=' + d.toUTCString()
      document.cookie = 'logsbrajoe' + '=' + 'brajoecarwash' + ';' + expires + ';path=/'
    }
    // this.showSlides(this.slideIndex)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

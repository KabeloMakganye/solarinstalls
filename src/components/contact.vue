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
                    <li class="current"><a @click="removemenu">Contact</a></li>
                    <li><a @click="directto1('Account')">Account</a></li>
                    <!-- li class="go-premium-cta"><a href="https://brajoecarwash.co.za/#/login">Log in</a></li>
                    <li class="go-premium-cta"><a href="https://brajoecarwash.co.za/#/signup">Sign up</a></li> -->
                </ul>
            </nav>
        </div>
    </div>
    <section class="hero">
        <div class="container">
            <div class="left-col">
               <!-- <p class="subhead">It's Nitty &amp; Gritty</p> -->
               <!-- <h1>Limited OFFER </h1> -->
                <h1>Get in touch with us</h1>
                <blockquote></blockquote>
               <!-- <p style="font-size:50px">&#128295;&#128296;&#128297;</p> -->
               <!-- <div class="hero-cta">
                    <a href="#" class="primary-cta">Try for free</a>
                    <a href="#" class="watch-video-cta">
                        <img src="../assets/watch.svg" alt="Watch a video">Watch a video
                    </a>
                </div> -->
            </div>
           <!-- <img src="../assets/108487139-window-wash-1440.jpg" class="hero-img" alt="Illustration">-->
        </div>
    </section>
    <section class="contact-section">
        <div class="container">
            <div class="contact-left">
                <h2>Customer Service</h2>

                <form onsubmit="return false">
                  <div id="suggestions" class="suggestions">
                    <label for="name">Name</label>
                    <input type="text" v-model= "sugname" id="name" name="name" required oninvalid="this.setCustomValidity('Enter Name')" oninput="this.setCustomValidity('')">

                    <!-- <label for="email">Email</label>
                    <input type="email" v-model= "sugemail" id="email" name="email" required oninvalid="this.setCustomValidity('Enter Valid Email')" oninput="this.setCustomValidity('')">
-->
                    <label for="email">Email</label>
                    <input type="email" v-model= "signemail" id="email" name="email" required oninvalid="this.setCustomValidity('Enter Valid Email')" oninput="this.setCustomValidity('')">

                    <label for="message">Message</label>
                    <textarea style="resize: none;" name="message" v-model= "sugmessage" id="message" cols="30" rows="10" required oninvalid="this.setCustomValidity('Enter Suggestion message')" oninput="this.setCustomValidity('')"></textarea>

                    <input id="sendesugg" type="button" @click="sendemail" class="send-message-cta" value="Send message">
                  </div>
                </form>
            </div>
            <!-- <div class="contact-right">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d706.4003803323423!2d28.099735019504372!3d-25.579115927241748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1824186fdf08ed66!2sBrajoes%20car%20wash!5e1!3m2!1sen!2sza!4v1655380638616!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> -->

        </div>
    </section>
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
    directto1 (n) {
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
<style>

</style>

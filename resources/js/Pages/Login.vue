<template>
    <Head title="Login" />        
    <!----------------------- Main Container -------------------------->
     <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <!----------------------- Login Container -------------------------->
       <div class="row border rounded-5 p-3 bg-white shadow box-area">
    <!--------------------------- Left Box ----------------------------->
       <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style="background: #103cbe;">
           <div class="featured-image mb-3">
            <img src="" class="img-fluid" style="width: 250px;">
           </div>
           <p class="text-white fs-2" style="font-family: 'Courier New', Courier, monospace; font-weight: 600;">Be Verified</p>
           <small class="text-white text-wrap text-center" style="width: 17rem;font-family: 'Courier New', Courier, monospace;">Join experienced Designers on this platform.</small>
       </div> 
    <!-------------------- ------ Right Box ---------------------------->
        
       <div class="col-md-6 right-box">
          <div class="row align-items-center">
                <div class="header-text mb-4">
                     <h2>Hello, Again</h2>
                     <p>We are happy to have you back.</p>
                </div>
                <form @submit.prevent="form.post('/login')">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control form-control-lg bg-light fs-6" :class="{ 'is-invalid': form.errors.email }" v-model="form.email" placeholder="Email address">
                        <div class="invalid-feedback" v-text="form.errors.email"></div>
                    </div>
                    <div class="input-group mb-1">
                        <input type="password" class="form-control form-control-lg bg-light fs-6" :class="{ 'is-invalid': form.errors.password }" v-model="form.password" placeholder="Password">
                        <div class="invalid-feedback" v-text="form.errors.password"></div>
                    </div>
                    <div class="input-group mb-5 d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="form.remember" id="formCheck">
                            <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                        </div>
                        <div class="forgot">
                            <small><a href="#">Forgot Password?</a></small>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <button class="btn btn-lg btn-primary w-100 fs-6">Login</button>
                    </div>
                    <div class="input-group mb-3">
                        <a class="btn btn-lg btn-light w-100 fs-6" href="/" role="button"><i class="bi bi-house"></i>&nbsp;<small>Back to Home</small></a>
                    </div>
                </form>
                <div class="row">
                    <small>Don't have account? <a href="#">Sign Up</a></small>
                </div>
          </div>
       </div> 
      </div>
    </div>
</template>

<script setup>
import { useForm, Head } from '@inertiajs/vue3';

const form = useForm({
    email: null,
    password: null,
    remember: true
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
body{
    font-family: 'Poppins', sans-serif;
    background: #ececec;
}
/*------------ Login container ------------*/
.box-area{
    width: 930px;
}
/*------------ Right box ------------*/
.right-box{
    padding: 40px 30px 40px 40px;
}
/*------------ Custom Placeholder ------------*/
::placeholder{
    font-size: 16px;
}
.rounded-4{
    border-radius: 20px;
}
.rounded-5{
    border-radius: 30px;
}
/*------------ For small screens------------*/
@media only screen and (max-width: 768px){
     .box-area{
        margin: 0 10px;
     }
     .left-box{
        height: 100px;
        overflow: hidden;
     }
     .right-box{
        padding: 20px;
     }
}
</style>
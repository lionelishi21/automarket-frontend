<template>

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Breadcrumb Section -->
    
  <!-- Page Preloader -->
    <div id="jsPreloader" v-show="isSaving" class="page-preloader" style="background: rgba(0,0,0,0.5);">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Saving...</span>
        </div>
      </div>
    </div>
 <!-- End Preloader -->
    <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">

        <div class="alert alert-success" role="alert" v-show="isComplete" @click="isComplete = false">
          Update successfully  
        </div>
        <div class="alert alert-danger" v-if="GetUserProfile.isVerify === null" role="alert">
          Please verify your account <a href="#" @click="verifyAccount()">Resend Verification</a>
        </div>
        
        <!-- Update Avatar Form -->
        <form class="media align-items-center mb-7">
          <div class="u-lg-avatar mr-3">
            <img class="img-fluid rounded-circle" src="../../assets/img/160x160/img2.jpg" alt="Image Description">
          </div>

          <div class="media-body">
            <label class="btn btn-sm btn-primary transition-3d-hover file-attachment-btn mb-1 mb-sm-0 mr-1" for="fileAttachmentBtn">
              Upload Company Logo
              <input id="fileAttachmentBtn" name="file-attachment" type="file" class="file-attachment-btn__label">
            </label>
   
            <button type="submit" class="btn btn-sm btn-soft-secondary transition-3d-hover mb-1 mb-sm-0">Delete</button>
          </div>
        </form>
        <!-- End Update Avatar Form -->

        <!-- Personal Info Form -->
        <form class="js-validate">
          <div class="row">
            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label id="nameLabel" class="form-label">
                  Name
                  <span class="text-danger">*</span>
                </label>
                <div class="form-group">
                  <input v-model="GetUserProfile.name"  type="text" class="form-control" name="name" placeholder="Enter your name" aria-label="Enter your name" required aria-describedby="nameLabel"
                         data-msg="Please enter your name."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                  <small class="form-text text-muted">Displayed on your public profile, notifications and other places.</small>
                </div>
              </div>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label id="usernameLabel" class="form-label">
                  Username
                  <span class="text-danger">*</span>
                </label>

                <div class="form-group">
                  <input type="text" v-model="GetUserProfile.username" class="form-control" name="username" value="natalie" placeholder="Enter your username" aria-label="Enter your username" required aria-describedby="usernameLabel"
                         data-msg="Please enter your username."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
            <!-- End Input -->
          </div>

          <label class="form-label">
            Location
            <span class="text-danger">*</span>
          </label>

          <div class="row">
            <!-- Input -->
            <div class="col-md-6 mb-3 mb-sm-6">
              <div class="js-form-message">
                <div class="form-group">
                  <select v-model="GetUserProfile.parish" class="form-control custom-select" required data-msg="Please select month." data-error-class="u-has-error" data-success-class="u-has-success">
                    <option :value="GetUserProfile.parish">{{GetUserProfile.parish}}</option>
                    <option v-for="p in parishes" :value="p.name" >{{p.name}} </option>
                  </select>
                </div>
              </div>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="col-sm-4 col-md-3 mb-3 mb-sm-6">
              <div class="js-form-message">
                <div class="form-group">
                  <input type="text" v-model="GetUserProfile.district" class="form-control" placeholder="District" name="">
                </div>
              </div>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="col-sm-4 col-md-3 mb-6">
              <div class="js-form-message">
                <div class="form-group">
                    <input type="text" v-model="GetUserProfile.address"  class="form-control" placeholder="Address" name="">
                </div>
              </div>
            </div>
            <!-- End Input -->
          </div>
      
          <!-- <div class="row"> -->
            <!-- Input -->
            <!-- <div class="col-sm-6 mb-6"> -->
   <!--            <div class="js-form-message">
                <label id="emailLabel" class="form-label">
                  Email address
                  <span class="text-danger">*</span>
                </label>

                <div class="form-group">
                  <input type="email" v-model="formdata.email" class="form-control" name="email" value="natalie.curtis@gmail.com" placeholder="Enter your email address" aria-label="Enter your email address" required aria-describedby="emailLabel"
                         data-msg="Please enter a valid email address."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
              </div> -->
            <!-- </div> -->
            <!-- End Input -->

            <!-- Input -->
            <!-- <div class="col-sm-6 mb-6"> -->
             <!--  <div class="js-form-message">
                <label id="locationLabel" class="form-label">
                  Location
                  <span class="text-danger">*</span>
                </label>

                <div class="form-group">
                  <input type="text" class="form-control" name="location" value="London, England" placeholder="Enter your location" aria-label="Enter your location" required aria-describedby="locationLabel"
                         data-msg="Please enter your location."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div> -->
            <!-- </div> -->
            <!-- End Input -->
          <!-- </div> -->
       <!--    <div class="row">
           <div>
                <div>
                  <h2>Search and add a pin</h2>
                  <label>
                    <gmap-autocomplete
                      @place_changed="setPlace">
                    </gmap-autocomplete>
                    <button @click="addMarker">Add</button>
                  </label>
                  <br/>

                </div>
                <br>
                <gmap-map
                  :center="center"
                  :zoom="12"
                  style="width:100%;  height: 400px;"
                >
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
                  ></gmap-marker>
                </gmap-map>
              </div>
          </div> -->
          <div class="row">
            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label id="organizationLabel" class="form-label">
                  Company
                  <span class="text-danger">*</span>
                </label>

                <div class="form-group">
                  <input v-model="GetUserProfile.company" type="text" class="form-control" name="organization" value="Pixeel Ltd." placeholder="Enter your organization name" aria-label="Enter your organization name" required aria-describedby="organizationLabel"
                         data-msg="Please enter your organization name"
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label id="phoneNumberLabel" class="form-label">
                  Phone number
                  <span class="text-danger">*</span>
                </label>

                <div class="form-group">
                  <input v-model="GetUserProfile.phone" class="form-control" type="tel" name="phoneNumber" value="+44 (0161) 347 8854" placeholder="Enter your phone number" aria-label="Enter your phone number" required aria-describedby="phoneNumberLabel"
                         data-msg="Please enter a valid phone number"
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            
            </div>
            <!-- End Input -->
            <!-- End Input -->
          </div>

          <div class="row">
           
           
          </div>

          <hr class="mt-1 mb-7">

          <!-- Title -->
          <div class="mb-3">
            <h2 class="h5 mb-0">About</h2>
            <p>Tell about yourself in two sentences.</p>
          </div>
          <!-- End Title -->

          <div class="mb-6">
            <label class="form-label">
              Bio
            </label>

            <!-- Text Editor Input -->
            <div class="u-summernote-editor">
             <textarea name="" v-model="GetUserProfile.about" class="form-control"></textarea>
            </div>
            <!-- End Text Editor Input -->
          </div>


          <!-- Buttons -->
          <button @click.prevent="saveProfile()" class="btn btn-sm btn-primary transition-3d-hover mr-1">Save Changes</button>
          <button type="submit" class="btn btn-sm btn-soft-secondary transition-3d-hover">Cancel</button>
          <!-- End Buttons -->

          <hr class="my-7">

        </form>
        <!-- End Personal Info Form -->
      </div>
    </div>
    <!-- End Content Section -->
  </main>
  <!-- ========== END MAIN ========== -->
</template>
<script>

import { mapGetters } from 'vuex';
import axios from 'axios'

export default {
  data() {
    return {
         formdata: {
          name: ''
         },
         isSaving: false,
         isComplete: false,
         profile: {},
         place: null,
         parishes: [
            { name: 'Kingston' },
            { name: 'St. Andrew' },
            { name: 'Portland' },
            { name: 'St.Thomas' },
            { name: 'St. Catherine' },
            { name: 'St. Mary'},
            { name: 'St. Mary'},
            { name: 'St. Ann'},
            { name: 'Manchester'},
            { name: 'Clarendon'},
            { name: 'Hanover'},
            { name: 'Westmoreland'},
            { name: 'St. James'},
            { name: 'Trelawny'},
            { name: 'St. Elizabeth'},
        ],
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null
      }
  },
  computed: {
    ...mapGetters([
      'GetUserProfile'
    ])
  },

  created() {
    this.$store.dispatch('GET_USER_PROFILE')
      .then(response => {
        console.log('profile data...')
      })
  },
  methods: {
    
    verifyAccount() {
      this.$store.dispatch('VERIFY_USER')
    },
       // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    saveProfile() {
      this.isSaving = true
      this.isComplete = false
      
      let formData = new FormData()
      formData.append('profile', JSON.stringify(this.GetUserProfile))
      // formData.append('profile', this.GetUserProfile)

      axios.post('http://18.206.230.202/api/update-profile', formData)
        .then( response => {
          console.log( response )

          var self = this
          setTimeout(function() {
            self.isComplete = true
            self.isSaving = false
          }, 2000);

           this.$store.dispatch('GET_USER_PROFILE')
        }, error => {
           console.log(error.response)
           this.isSaving = false
        })
    }
  }
}
</script>
<template>
  <div>
    <v-row >
      <v-col>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="./venue_image.png"></v-img>

          <v-card-title>Venue Renting</v-card-title>

          <v-card-text>
            <!-- <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <div class="my-4 text-subtitle-1">Php 1,5000,4000</div> -->
            <div>
                   The Resorts offers venue renting. Customer can rent the place for a good couple of hours.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <!-- <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
       <v-col>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="./event_image.jpeg"></v-img>

          <v-card-title>Event Packages</v-card-title>

          <v-card-text>
            <!-- <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <div class="my-4 text-subtitle-1">Php 1,5000,4000</div> -->
            <div>
              Any events are possible by the help of the resort. The resort offer a lot of event packages it can be for a party
                , wedding, reunion!
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <!-- <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
       <v-col>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="./pool_image.jpeg"></v-img>

          <v-card-title>Pools</v-card-title>

          <v-card-text>
            <!-- <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <div class="my-4 text-subtitle-1">Php 1,5000,4000</div> -->
            <div>
              Want to have a quick dip in water! the resorts have three (3) pool. One(1) private and two (2) public and more pools are being created!
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <!-- <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                
              Reserve
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
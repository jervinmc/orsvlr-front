<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card  align="start" class="pa-16">
       <div>
            <div align="center">
            BEFORE CHECK IN ADDITIONAL PAYMENT
        </div>
          <v-row>
            <v-col>
              <div>AD ONS</div>
            </v-col>
            <v-col align="end" cols="auto">
              <v-row>
             
                <v-col>
                  <div>
                    <v-icon @click="addSize">mdi-plus</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        <div>
           <v-row v-for="(x, index) in ads_label" :key="index">
              <v-col>
                  <v-select outlined @change="changeAds(ads_label[index],index)" v-model="ads_label[index]" :items="adsAll" item-text="label" item-value="label">></v-select>
              </v-col>
              <v-col>
                <v-text-field
                readonly
                  label="Price"
                  outlined
                  v-model="ads_price[index]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Quantity"
                  outlined
                  v-model="ads_quantity[index]"
                ></v-text-field>
              </v-col>
                 <v-col class="pt-0" cols="2" align-self="center">
                  <div>
                    <v-icon @click="removeSize(index)" color="red">mdi-delete</v-icon>
                  </div>
                </v-col>
            </v-row>
        </div>
        <v-row>
            <v-col>
              <div>Others</div>
            </v-col>
            <v-col align="end" cols="auto">
              <v-row>
                <v-col>
                  <div>
                    <v-icon @click="addOther">mdi-plus</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        <div>
           <v-row v-for="(x, index) in other_label" :key="index">
              <v-col>
                <v-text-field
                  label="Label"
                  outlined
                  v-model="other_label[index]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Price"
                  outlined
                  v-model="other_price[index]"
                ></v-text-field>
              </v-col>
               <v-col class="pt-0" cols="2" align-self="center">
                  <div>
                    <v-icon @click="removeOther(index)" color="red">mdi-delete</v-icon>
                  </div>
                </v-col>
            </v-row>
        </div>
         <v-row>
            <v-col>
              <div>Discount</div>
            </v-col>
            <v-col align="end" cols="auto">
              <v-row>
                <v-col>
                  <div>
                    <v-icon @click="addDiscount">mdi-plus</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        <div>
           <v-row v-for="(x, index) in discount_label" :key="index">
              <v-col>
                <v-text-field
                  label="Label"
                  outlined
                  v-model="discount_label[index]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Price"
                  outlined
                  v-model="discount_price[index]"
                ></v-text-field>
              </v-col>
                <v-col class="pt-0" cols="2" align-self="center">
                  <div>
                    <v-icon @click="removeDiscount(index)" color="red">mdi-delete</v-icon>
                  </div>
                </v-col>
            </v-row>
        </div>
       </div>
       <v-card-actions>
           <v-row>
               <v-col>
                   <v-btn @click="cancel">Back</v-btn>
               </v-col>
               <v-col>
                   <v-btn @click="addEvents">Save</v-btn>
               </v-col>
           </v-row>
       </v-card-actions>
          </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd","ad_label","ad_price","ad_quantity"],
  watch: {
    ad_label() {
     try {
         for(let key in this.ad_label){
         this.ads_label.push(this.ad_label[key])
      }
     } catch (error) {
       
     }
     
    },
    ad_price() {
     try {
         for(let key in this.ad_price){
         this.ads_price.push(this.ad_price[key])
      }
     } catch (error) {
       
     }
     
    },
    ad_quantity() {
     try {
         for(let key in this.ad_quantity){
         this.ads_quantity.push(this.ad_quantity[key])
      }
     } catch (error) {
       
     }
     
    },
  },
  data() {
    return {
      ads_quantity:[],
        other_label:[],
        other_price:[],
        ads_label:[],
        ads_price:[],
        ads_list:[],
      room_list:['Standard','Deluxe','Suite'],
      events: [],
      discount_label:[],
      discount_price:[],
      fullscreenImage:false,
      adsAll:[],
      buttonLoad: false,
      img_holder:'image_placeholder.png'
    };
  },
  created(){
      this.adsGetall()
  },
  methods: {
      changeAds(item,index){
          for(let key in this.adsAll){
     
              if(item==this.adsAll[key].label) {
                    this.ads_price[index] =this.adsAll[key].price
              }
          
          }
      },
       async  adsGetall(){
       const res = await this.$axios
        .get(`/ads/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.adsAll = res.data;
          this.isLoading = false;
        });
    },
       removeSize(index) {
      this.$delete(this.ads_label, index);
      this.$delete(this.ads_price, index);
      this.$delete(this.ads_quantity, index);
    },
      addSize() {
      this.ads_label.push("");
      this.ads_price.push("");
      this.ads_quantity.push("1");
    },
     removeOther(index) {
      this.$delete(this.other_label, index);
      this.$delete(this.other_price, index);
    },
      addOther() {
      this.other_label.push("");
      this.other_price.push("");
    },
      removeDiscount(index) {
      this.$delete(this.discount_label, index);
      this.$delete(this.discount_price, index);
    },
      addDiscount() {
      this.discount_label.push("");
      this.discount_price.push("");
    },
    async addEvents() {

      this.buttonLoad = true;
      var ads = []
      var discount = []
      var total_discount = 0;
      var total = 0;
      var total_other = 0
      var other = []
      for(let key in this.ads_label){
            ads.push(`${this.ads_label[key]} - ${this.ads_price[key]} (${this.ads_quantity[key]}x = ${parseInt(this.ads_price[key]*parseInt(this.ads_quantity[key]))} )`)
            total = total + parseInt(this.ads_price[key]*parseInt(this.ads_quantity[key]))
            this.$axios.post('/adpend/',{"price":this.ads_price[key],"label":this.ads_label[key],"quantity":this.ads_quantity[key],"book_id":this.items.id})
        }
         for(let key in this.discount_label){
            discount.push(`${this.discount_label[key]} - ${this.discount_price[key]}`)
            total_discount = total_discount + parseInt(this.discount_price[key])
        }
         for(let key in this.other_label){
            other.push(`${this.other_label[key]} - ${this.other_price[key]}`)
            total_other = total_other + parseInt(this.other_price[key])
        }
        var params = {
            ads:ads,
            total:total,
            discount:discount,
            total_discount:total_discount,
            other:other,
            total_other:total_other

        }
      this.$emit("save",params);
    //   try {
    //     var ads = []
    //     for(let key in this.ads_label){
    //         ads.push(`${this.ads_label[key]} - ${this.ads_price[key]}`)
    //     }
    //     let form_data = new FormData();
    //      form_data.append("status", 'Checked In');
    //      form_data.append("ad_ons", ads);
    //       const response = await this.$axios
    //         .patch(`/book/${this.items.id}/`, form_data, {
    //           headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //           },
    //         })
    //         .then(() => {
    //           this.buttonLoad = false;
    //           this.$emit("cancel");
    //           this.$emit("refresh");
    //         });
        
    //   } catch (error) {
    //     // alert(error);
    //     this.buttonLoad = false;
    //   }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    onFileUpload(e) {
      this.image = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.image = e;
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e));
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>
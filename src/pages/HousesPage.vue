<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-4">
                <h1>House page! 🏠</h1>
            </div>
        </section>
        <section class="row">
            <div v-for="house in houses" :key="house.id" class="col-6 mb-5">
                <div class="row justify-content-center">
                    <div class="col-4 bg-secondary">
                        <img class="img-fluid" :src="house.imgUrl" alt="">
                    </div>
                    <div class="col-7 bg-secondary">
                        <div>
                            <p class="fw-bold fs-5">Bathrooms: {{ house.bathrooms }}</p>
                        </div>
                        <div>
                            <p class="fw-bold fs-5">Bedrooms: {{ house.bedrooms }}</p>
                        </div>
                        <div>
                            <p class="fw-bold fs-5">Levels: {{ house.levels }}</p>
                        </div>
                        <div>
                            <p class="fw-bold fs-5">Price: {{ house.price }}</p>
                        </div>
                        <div>
                            <p class="fw-bold fs-5">Year: {{ house.year }}</p>
                        </div>
                        <div>
                            <p class="fw-bold fs-5">Description: {{ house.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState.js'

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            getHouses()
        })
        return {
            houses: computed(() => AppState.houses)
        }
    }
}
</script>
  
<style scoped lang="scss">
.house-img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    object-position: center;
}
</style>
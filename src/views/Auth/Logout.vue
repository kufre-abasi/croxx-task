<script setup>
import { onMounted } from "vue";
import user from "@/stores/user"
import { useRouter } from "vue-router"

    
// let store = user();
const router = useRouter();

// store.deleteUser()
// router.push({name:'Login'})
onMounted(() => {
    localStorage.removeItem('_user_data')
    router.push({ name: 'Login' });
});
</script>


<template>
    <div>
        l,d;l,d;l,
    </div>
</template>

<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4"> 
            <span class="home">Vuexpress</span> 
        </v-toolbar-title>
        <v-toolbar-items>            
            <v-btn flat dark to="/">
                Home 
            </v-btn> 
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>            
            <v-btn v-if="!$store.state.isUserLoggedIn"
                flat dark to="login">                
                Login
            </v-btn>    

            <v-btn v-if="!$store.state.isUserLoggedIn"
                flat dark to="register">                
                Sign up
            </v-btn>            
            <v-btn flat dark>Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>   
</template>

<script>
    export default {                       
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.home {
    cursor: pointer;
}   
</style>

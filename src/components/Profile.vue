<template>
    <div class="profile">
        <h1>Profile</h1>
        <h2>Welcome to your profile, {{ authState.idToken.claims.name }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>
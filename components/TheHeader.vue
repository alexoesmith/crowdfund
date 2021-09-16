<template>
  <header class="absolute top-0 w-full py-10">
    <div class="container flex items-center justify-between">
      <Logo />
      <nav>
        <ul class="flex items-center space-x-6 text-sm text-white">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "../components/Logo";
export default {
  components: {
    Logo
  }
};
</script>

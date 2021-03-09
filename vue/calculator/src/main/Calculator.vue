<template>
<div class="calculator">
    <Display />
    <Button />
</div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";

export default {
  components: { Button, Display },
};
</script>

<style>
</style>
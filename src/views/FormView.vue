<template>
    <div class="form-view">
        <h1 class="form-title">Your Form Title</h1>
        <form>
            <TextField 
                id="textFieldId"
                label="Your name (real or fake)" 
                placeholder="Enter your name..." 
                v-model="formData.name" 
                :required="true"
                :isErrorVisible="isErrorVisible"
                error="The name field is required."
            />

            <NumericField 
                id="numericFieldId"
                label="Your favorite number" 
                placeholder="Enter your favorite number..." 
                v-model="formData.age" 
            />

            <TextAreaField
                id="textAreId"
                label="Your hobbies or what kind of hobby you dream of having"
                placeholder="List your hobbies..."
                v-model="formData.hobbies"
            />

            <SelectField label="Your favorite color" :options="colorOptions" v-model="formData.favoriteColor" />

            <RadioButtonField label="Your preferred pet" :options="petOptions" v-model="formData.preferredPet" />

            <div class="submit-area">
                <button class="submit-button" type="button" @click.prevent="submitForm">Submit</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import TextField from "../components/TextField.vue";
    import NumericField from "../components/NumericField.vue";
    import TextAreaField from "../components/TextAreaField.vue";
    import SelectField from "../components/SelectField.vue";
    import RadioButtonField from "../components/RadioButtonField.vue";

    const formData = ref({
        name: "",
        age: undefined as number | undefined,
        hobbies: "",
        favoriteColor: "",
        preferredPet: "",
    });

    const colorOptions = [
        { value: "red", label: "Red", text: "Red" },
        { value: "green", label: "Green", text: "Green" },
        { value: "blue", label: "Blue", text: "Blue" },
    ];

    const petOptions = [
        { value: "dog", label: "Dog", text: "Dog" },
        { value: "cat", label: "Cat", text: "Cat" },
        { value: "bird", label: "Bird", text: "Bird" },
    ];

    const isNameValid = computed(() => !!formData.value.name);

    const isFormInvalid = computed(() => {
        return !isNameValid.value;
    });

    const isSubmitAttempted = ref(false);

    const isErrorVisible = computed(() => isSubmitAttempted.value && isFormInvalid.value);

    const submitForm = () => {
        isSubmitAttempted.value = true;

        if (isFormInvalid.value) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        console.log(formData.value);
        // handle form submission
    };
</script>

<style scoped>
    .form-view {
        background-color: #e4fff8;
    }

    .form-title {
        text-align: center;
    }

    .submit-button {
        background-color: #0066cc;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    /* Change the background color on hover */
    .submit-button:hover {
        background-color: #004999;
    }

    /* Add an outline on focus */
    .submit-button:focus {
        outline: 2px solid #000000;
        outline-offset: 2px;
    }

    .label {
        display: inline-block;
        margin-bottom: 0.5em;
    }
</style>

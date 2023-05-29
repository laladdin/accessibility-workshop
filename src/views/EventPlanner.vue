<template>
    <div>
        <h1 class="text-center">Event planner</h1>

        <section class="mb-2 section-wrapper" aria-labelledby="section-header">
            <div id="section-header">Participants</div>
            <div class="row mb-2" v-for="(participant, i) in participants">
                <div class="col-3">
                    <label :for="'participant-' + i">Participant {{ i + 1 }}</label>
                </div>
                <div class="col-9">
                    <input type="text" :id="'participant-' + i" v-model="participants[i]" :ref="(el) => (participantInputElements[i] = el)" />
                    <button class="btn-delete" type="button" @click="deleteParticipant(participant, i)">
                        <DeleteIcon /><span class="sr-only">Delete participant {{ i + 1 }} {{ returnParticipantNameInBrackets(participant) }}</span>
                    </button>
                </div>
            </div>
            <button class="btn-add" type="button" @click="addParticipant()">Add participant</button>
        </section>

        <hr />
        <div class="row">
            <label for="dateField-eventDate" class="col-3 label"> Event date </label>
            <DateField class="col-9" uniqueName="eventDate" @update:selectedISODate="handleEventDate" />
        </div>
        <TextAreaWithTooltip id="event-summary" class="mt-4" v-model="text" placeholder="Location: Keilaranta, Dress code: ..." />
    </div>
</template>

<script setup lang="ts">
    import { Ref, onMounted, ref, nextTick, inject } from "vue";
    import TextAreaWithTooltip from "../components/TextAreaWithTooltip.vue";
    import DeleteIcon from "../components/icons/DeleteIcon.vue";
    import DateField from "vue-accessible-date-field";

    const text: Ref<string> = ref("");

    const setScreenreaderText = inject("setSrText") as (text: string) => void;

    const participants: Ref<string[]> = ref([] as string[]);
    let participantInputElements = ref([] as any);

    onMounted(() => {
        participants.value.push("");
    });

    const handleEventDate = (value: string) => {
        console.log(value);
    };

    function addParticipant(): void {
        participants.value.push("");

        nextTick(() => {
            participantInputElements.value[participants.value.length - 1].focus();
        });
    }

    function returnParticipantNameInBrackets(participant: string): string {
        return participant ? `(${participant})` : "";
    }

    function deleteParticipant(participant: string, i: number): void {
        if (window.confirm(`Are you sure you want to delete participant ${i + 1} ${returnParticipantNameInBrackets(participant)}`)) {
            participants.value.splice(i, 1);
            setScreenreaderText(`Deleted participant ${i + 1} ${returnParticipantNameInBrackets(participant)}`);
        }
    }
</script>

<style scoped>
    .row {
        margin-top: 1rem;
    }
    .btn-delete {
        border: 0;
        background-color: inherit;
    }

    .btn-delete:hover {
        outline: 2px solid #000000;
    }

    .btn-add {
        background-color: #0066cc;
        color: #ffffff;
        border: none;
        padding: 5px 10px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    /* Change the background color on hover */
    .btn-add:hover {
        background-color: #004999;
    }

    /* Add an outline on focus */
    .btn-add:focus {
        outline: 2px solid #000000;
        outline-offset: 2px;
    }

    .label {
        align-self: center;
    }

    #section-header {
        font-weight: bold;
        font-size: 1.25rem;
    }
</style>

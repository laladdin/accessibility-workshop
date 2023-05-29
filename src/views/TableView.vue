<template>
    <h1 class="mb-5">Some details about software development and accessibility.</h1>
    <h2>Fact table</h2>
    <table class="access-table">
        <tr class="header-row">
            <td scope="col">Fact</td>
            <td scope="col">Category</td>
            <td scope="col">Source</td>
        </tr>
        <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.fact }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.source }}</td>
        </tr>
    </table>

    <h2 id="srdata-table-title" class="mt-5 p-0">Screen reader use percentages by browser</h2>
    <p id="srdata-table-info" class="mb-0 p-0">
        Other screen reader + browser combinations including the table cells where data is not available amount up to 10.4%.
    </p>
    <table class="mt-0 access-table sr-table">
        <thead>
            <tr class="header-row">
                <td class="srdata-td" scope="col">Screen reader / Browser</td>
                <td class="right" scope="col">Chrome</td>
                <td class="right" scope="col">Firefox</td>
                <td class="right" scope="col">Internet Explorer</td>
                <td class="right" scope="col">Safari</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in screenRederData" :key="item.id">
                <td class="header-cell">{{ item.name }}</td>
                <td class="right">{{ getSrBrowserPercentage(item.chrome) }}</td>
                <td class="right">{{ getSrBrowserPercentage(item.firefox) }}</td>
                <td class="right">{{ getSrBrowserPercentage(item.IE) }}</td>
                <td class="right">{{ getSrBrowserPercentage(item.safari) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    interface TableRow {
        id: number;
        fact: string;
        category: string;
        source: string;
    }

    const tableData = ref<TableRow[]>([
        {
            id: 1,
            fact: "Software development is more about people tdan code.",
            category: "Software Development",
            source: "Common Knowledge",
        },
        {
            id: 2,
            fact: "Accessibility is not a feature, it's a necessity.",
            category: "Accessibility",
            source: "W3C",
        },
        {
            id: 4,
            fact: "Adding alt text to images is a simple way to improve accessibility.",
            category: "Accessibility",
            source: "W3C",
        },
        {
            id: 5,
            fact: "90% of developers work outside of Silicon Valley.",
            category: "Software Development",
            source: "Stack Overflow Developer Survey 2019",
        },
        {
            id: 6,
            fact: "Web accessibility also benefits people witdout disabilities.",
            category: "Accessibility",
            source: "W3C",
        },
        {
            id: 7,
            fact: "Pytdon is one of tde most loved programming languages.",
            category: "Software Development",
            source: "Stack Overflow Developer Survey 2020",
        },
        {
            id: 8,
            fact: "Accessible websites have better search results.",
            category: "Accessibility",
            source: "Google Webmasters",
        },
    ]);

    interface ScreenReaderDataRow {
        id: number;
        name: string;
        firefox: number | null;
        chrome: number | null;
        IE: number | null;
        safari: number | null;
    }

    const screenRederData = ref<ScreenReaderDataRow[]>([
        {
            id: 1,
            name: "NVDA",
            firefox: 19.6,
            chrome: 18.0,
            IE: 1.2,
            safari: null,
        },
        {
            id: 2,
            name: "JAWS",
            firefox: 5.9,
            chrome: 21.4,
            IE: 11.5,
            safari: null,
        },
        {
            id: 3,
            name: "VoiceOver",
            firefox: null,
            chrome: 3.0,
            IE: null,
            safari: 9.1,
        },
    ]);

    function getSrBrowserPercentage(item: number | null): string {
        return item ? `${item}%` : "N/A";
    }
</script>

<style scoped>
    .access-table {
        width: 100%;
        border-collapse: collapse;
    }

    .access-table td,
    .access-table th {
        border: 1px solid #212529;
        padding: 8px;
        text-align: left;
    }

    td.right,
    th.right {
        text-align: right;
    }

    .access-table tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .access-table tr.header-row td,
    .access-table.sr-table .header-row .srdata-td {
        background-color: #164e83;
        color: white;
        font-weight: bold;
    }

    .access-table.sr-table tr.header-row td,
    .access-table .header-cell {
        font-weight: bold;
        color: black;
        background-color: inherit;
    }

    table caption {
        caption-side: top;
        color: unset;
    }
</style>

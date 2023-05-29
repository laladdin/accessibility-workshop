<template>
    <h1 class="mb-5">Some details about software development and accessibility.</h1>
    <table class="access-table">
        <caption>
            <h2>Fact table</h2>
        </caption>
        <thead>
            <tr>
                <th scope="col">Fact</th>
                <th scope="col">Category</th>
                <th scope="col">Source</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tableData" :key="item.id">
                <td>{{ item.fact }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.source }}</td>
            </tr>
        </tbody>
    </table>

    <h2 id="srdata-table-title" class="mt-5 p-0">Screen reader usage shares</h2>
    <p id="srdata-table-info" class="mb-0 p-0">
        Other screen reader + browser combinations including the table cells where data is not available amount up to 10.4%.
    </p>
    <table aria-labelledby="srdata-table-title" aria-describedby="srdata-table-info" class="mt-0 access-table sr-table">
        <thead>
            <tr>
                <th class="srdata-th" scope="col">Screen reader / Browser</th>
                <th class="right" scope="col">Chrome</th>
                <th class="right" scope="col">Firefox</th>
                <th class="right" scope="col">Internet Explorer</th>
                <th class="right" scope="col">Safari</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in screenRederData" :key="item.id">
                <th>{{ item.name }}</th>
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
            fact: "Software development is more about people than code.",
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
            fact: "Web accessibility also benefits people without disabilities.",
            category: "Accessibility",
            source: "W3C",
        },
        {
            id: 7,
            fact: "Python is one of the most loved programming languages.",
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

    .access-table th,
    .access-table td {
        border: 1px solid #212529;
        padding: 8px;
        text-align: left;
    }

    th.right,
    td.right {
        text-align: right;
    }

    .access-table tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .access-table th,
    .access-table.sr-table .srdata-th {
        background-color: #164e83;
        color: white;
    }

    .access-table.sr-table th {
        font-weight: bold;
        color: black;
        background-color: inherit;
    }

    table caption {
        caption-side: top;
        color: unset;
    }
</style>

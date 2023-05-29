import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import Home from "./views/Home.vue";
import EventPlanner from "./views/EventPlanner.vue";
import ModalView from "./views/ModalView.vue";
import FormView from "./views/FormView.vue";
import TableView from "./views/TableView.vue";
import Popper from "vue3-popper";
import "./style.css";

const pageTitle = "Accessibility Exercises";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home, meta: { title: "Home | " + pageTitle } },
        { path: "/event-planner", name: "EventPlanner", component: EventPlanner, meta: { title: "Event Planner | " + pageTitle } },
        { path: "/modal", name: "Modal", component: ModalView, meta: { title: "Modal | " + pageTitle } },
        { path: "/form", name: "Form", component: FormView, meta: { title: "Form | " + pageTitle } },
        { path: "/table", name: "Table", component: TableView, meta: { title: "Table | " + pageTitle } },
    ],
});

router.afterEach((to, from) => {
    if (from != START_LOCATION) {
        document.getElementById("skiplink")?.focus();
    }
});
var app = createApp(App);
app.component("Popper", Popper);
app.use(router);
app.mount("#app");

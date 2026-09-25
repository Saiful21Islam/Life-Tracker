// =====================================
// WEEKLY TASKS
// =====================================

const TASKS = {

    Saturday: [

        ["Job", "Office 9:00 AM - 6:00 PM", "Job"],

        ["Programming",
            "Programming Practice - 1 Hour",
            "Programming"],

        ["German",
            "German Vocabulary - 30 Minutes",
            "German"],

        ["Rest",
            "Rest / Recovery",
            "Rest"]
    ],


    Sunday: [

        ["Job",
            "Office 9:00 AM - 6:00 PM",
            "Job"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["German",
            "German Class - 7:00 PM - 9:00 PM",
            "German"],

        ["Rest",
            "Rest",
            "Rest"]
    ],


    Monday: [

        ["Job",
            "Office 9:00 AM - 6:00 PM",
            "Job"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["Programming",
            "Programming Practice - 1 Hour",
            "Programming"],

        ["Rest",
            "Rest",
            "Rest"]
    ],


    Tuesday: [

        ["Job",
            "Office 9:00 AM - 6:00 PM",
            "Job"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["German",
            "German Class - 7:00 PM - 9:00 PM",
            "German"],

        ["German",
            "German Revision - 30 Minutes",
            "German"]
    ],


    Wednesday: [

        ["Job",
            "Office 9:00 AM - 6:00 PM",
            "Job"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["Programming",
            "Programming Practice - 1 Hour",
            "Programming"],

        ["Rest",
            "Rest",
            "Rest"]
    ],


    Thursday: [

        ["Job",
            "Office 9:00 AM - 6:00 PM",
            "Job"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["German",
            "German Class - 7:00 PM - 9:00 PM",
            "German"],

        ["German",
            "German Revision - 30 Minutes",
            "German"]
    ],


    Friday: [

        ["University",
            "University Study - 2 Hours",
            "University"],

        ["Programming",
            "Programming Practice - 2 Hours",
            "Programming"],

        ["Outdoor",
            "Outdoor / Family Time",
            "Rest"],

        ["Revision",
            "Weekly Revision",
            "University"],

        ["Rest",
            "Full Rest",
            "Rest"]
    ]

};


// =====================================
// DAYS
// =====================================

const DAYS = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];


// =====================================
// STORAGE
// =====================================

const STORAGE_KEY =
    "professional_7_day_tracker";

let data =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || {};


// =====================================
// SELECTED DATE
// =====================================

let selectedDate = new Date();


// =====================================
// FORMAT DATE
// =====================================

function dateKey(date) {

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


// =====================================
// GET SATURDAY OF WEEK
// =====================================

function getSaturday(date) {

    const d =
        new Date(date);

    d.setHours(0, 0, 0, 0);

    const day =
        d.getDay();

    // Saturday = 6

    const difference =
        day === 6
            ? 0
            : day + 1;

    d.setDate(
        d.getDate() - difference
    );

    return d;
}


// =====================================
// GET WEEK DATES
// =====================================

function getWeekDates(date) {

    const saturday =
        getSaturday(date);

    const dates = [];

    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const d =
            new Date(saturday);

        d.setDate(
            saturday.getDate() + i
        );

        dates.push(d);

    }

    return dates;
}


// =====================================
// TASK KEY
// =====================================

function taskKey(
    date,
    index
) {

    return (
        dateKey(date)
        + "_"
        + index
    );

}


// =====================================
// SAVE
// =====================================

function save() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


// =====================================
// PERCENTAGE
// =====================================

function percentage(
    done,
    total
) {

    if (!total) {

        return 0;

    }

    return Math.round(
        done / total * 100
    );

}


// =====================================
// RENDER
// =====================================

function render() {

    const dates =
        getWeekDates(
            selectedDate
        );


    // WEEK LABEL

    document.getElementById(
        "weekLabel"
    ).textContent =

        formatDate(dates[0])
        + " - "
        + formatDate(dates[6]);


    // CALENDAR

    renderCalendar(
        dates
    );


    // SELECTED DAY

    renderTasks(
        selectedDate
    );


    // WEEK DASHBOARD

    renderDashboard(
        dates
    );

}


// =====================================
// FORMAT DATE
// =====================================

function formatDate(date) {

    return date.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


// =====================================
// CALENDAR
// =====================================

function renderCalendar(
    dates
) {

    const week =
        document.getElementById(
            "week"
        );

    week.innerHTML = "";


    dates.forEach(
        (date, index) => {

            const dayName =
                DAYS[index];


            const tasks =
                TASKS[dayName];


            let done = 0;


            tasks.forEach(
                (_, taskIndex) => {

                    if (
                        data[
                        taskKey(
                            date,
                            taskIndex
                        )
                        ]
                    ) {

                        done++;

                    }

                }
            );


            const percent =
                percentage(
                    done,
                    tasks.length
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "day-card";


            if (
                dateKey(date)
                ===
                dateKey(selectedDate)
            ) {

                card.classList.add(
                    "selected"
                );

            }


            if (
                dateKey(date)
                ===
                dateKey(new Date())
            ) {

                card.classList.add(
                    "today"
                );

            }


            card.innerHTML = `

                <div class="day-name">
                    ${dayName}
                </div>

                <div class="day-date">
                    ${formatDate(date)}
                </div>

                <div class="day-percent">
                    ${percent}%
                </div>

                <div class="mini-bar">

                    <div
                        class="mini-fill"
                        style="
                            width:${percent}%
                        "
                    ></div>

                </div>

            `;


            card.onclick =
                function () {

                    selectedDate =
                        new Date(date);

                    render();

                };


            week.appendChild(
                card
            );

        }
    );

}


// =====================================
// TASK LIST
// =====================================

function renderTasks(
    date
) {

    const dayIndex =
        getWeekDates(
            date
        ).findIndex(
            d =>
                dateKey(d)
                ===
                dateKey(date)
        );


    const dayName =
        DAYS[dayIndex];


    document.getElementById(
        "selectedDayTitle"
    ).textContent =

        dayName
        + " - "
        + formatDate(date);


    const list =
        document.getElementById(
            "taskList"
        );


    list.innerHTML = "";


    TASKS[dayName].forEach(
        (task, index) => {

            const key =
                taskKey(
                    date,
                    index
                );


            const checked =
                data[key] === true;


            const row =
                document.createElement(
                    "label"
                );


            row.className =
                "task";


            if (checked) {

                row.classList.add(
                    "completed"
                );

            }


            row.innerHTML = `

                <input
                    type="checkbox"
                    ${checked ? "checked" : ""}
                >

                <div class="task-info">

                    <div class="task-name">
                        ${task[0]} -
                        ${task[1]}
                    </div>

                    <div class="task-category">
                        ${task[2]}
                    </div>

                </div>

            `;


            row.querySelector(
                "input"
            ).addEventListener(
                "change",
                function () {

                    data[key] =
                        this.checked;

                    save();

                    render();

                }
            );


            list.appendChild(
                row
            );

        }
    );

}


// =====================================
// DASHBOARD
// =====================================

function renderDashboard(
    dates
) {

    let total = 0;

    let completed = 0;


    const subjects = {

        Job: {
            total: 0,
            done: 0
        },

        German: {
            total: 0,
            done: 0
        },

        University: {
            total: 0,
            done: 0
        },

        Programming: {
            total: 0,
            done: 0
        }

    };


    dates.forEach(
        (date, dayIndex) => {

            const tasks =
                TASKS[
                DAYS[dayIndex]
                ];


            tasks.forEach(
                (task, index) => {

                    total++;


                    const done =
                        data[
                        taskKey(
                            date,
                            index
                        )
                        ] === true;


                    if (done) {

                        completed++;

                    }


                    const category =
                        task[2];


                    if (
                        subjects[
                        category
                        ]
                    ) {

                        subjects[
                            category
                        ].total++;


                        if (done) {

                            subjects[
                                category
                            ].done++;

                        }

                    }

                }
            );

        }
    );


    document.getElementById(
        "overall"
    ).textContent =

        percentage(
            completed,
            total
        ) + "%";


    document.getElementById(
        "completed"
    ).textContent =
        completed;


    document.getElementById(
        "remaining"
    ).textContent =
        total - completed;


    updateProgress(
        "jobPercent",
        "jobBar",
        subjects.Job
    );


    updateProgress(
        "germanPercent",
        "germanBar",
        subjects.German
    );


    updateProgress(
        "universityPercent",
        "universityBar",
        subjects.University
    );


    updateProgress(
        "programmingPercent",
        "programmingBar",
        subjects.Programming
    );


    document.getElementById(
        "streak"
    ).textContent =

        calculateStreak()
        + " 🔥";

}


// =====================================
// PROGRESS
// =====================================

function updateProgress(
    textId,
    barId,
    value
) {

    const percent =
        percentage(
            value.done,
            value.total
        );


    document.getElementById(
        textId
    ).textContent =
        percent + "%";


    document.getElementById(
        barId
    ).style.width =
        percent + "%";

}


// =====================================
// TODAY
// =====================================

function goToday() {

    selectedDate =
        new Date();

    document.getElementById(
        "datePicker"
    ).value =
        dateKey(
            selectedDate
        );

    render();

}


// =====================================
// DATE PICKER
// =====================================

document.getElementById(
    "datePicker"
).addEventListener(
    "change",
    function () {

        if (!this.value) {

            return;

        }


        // Local date

        const parts =
            this.value.split("-");


        selectedDate =
            new Date(
                Number(parts[0]),
                Number(parts[1]) - 1,
                Number(parts[2])
            );


        render();

    }
);


// =====================================
// STREAK
// =====================================

function isDayCompleted(
    date
) {

    const day =
        date.getDay();


    const dayName =
        new Intl.DateTimeFormat(
            "en-US",
            {
                weekday: "long"
            }
        ).format(date);


    const tasks =
        TASKS[dayName];


    if (!tasks) {

        return false;

    }


    return tasks.every(
        (_, index) => {

            return data[
                taskKey(
                    date,
                    index
                )
            ] === true;

        }
    );

}


function calculateStreak() {

    let date =
        new Date();


    date.setHours(
        0, 0, 0, 0
    );


    let streak = 0;


    if (
        !isDayCompleted(date)
    ) {

        date.setDate(
            date.getDate() - 1
        );

    }


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        if (
            isDayCompleted(date)
        ) {

            streak++;

            date.setDate(
                date.getDate() - 1
            );

        } else {

            break;

        }

    }


    return streak;

}


// =====================================
// INITIAL LOAD
// =====================================

document.getElementById(
    "datePicker"
).value =
    dateKey(
        new Date()
    );


render();
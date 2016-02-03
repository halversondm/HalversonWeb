/**
 * Created by Daniel on 1/25/2016.
 */
'use strict';

import angular from 'angular';

export default class AbcController {

    constructor($http, $uibModal) {
        this.http = $http;
        this.modal = $uibModal;
        this.antecedents = ['Given Direction/task, asked to do something', 'Asked to wait', 'Difficulty with task/activity', 'Preferred activity interrupted', 'Activity/Item denied ("told no")', 'Loud, noisy environment', 'Given assistance / correction', 'Transition between locations', 'Attention given to others', 'Attention not given when wanted', 'Left alone (no indiv. attention)'];
        this.locations = ['Home', 'School', 'Other'];
        this.people = ['Mom', 'Dad', 'Sibling', 'Grandparents', 'Alone', 'Peers'];
        this.behaviors = ['Refuse to follow directions', 'Makes verbal threats', 'Grabbing/pulling', 'Crying/Whining', 'Screaming/Yelling', 'Scratching', 'Biting', 'Spitting', 'Kicking', 'Flopping', 'Running Away', 'Destroying property', 'Hitting Self', 'Hitting Others', 'Verbal Refusal'];
        this.durations = ['< 1 min', '1 - 5 min', '5 - 10 min', '10 - 30 min', '30 min - 1 hr', '1 - 2 hrs', '2 - 3 hrs', '3+ hrs'];
        this.intensities = ['Low', 'Medium', 'High'];
        this.consequences = ['Verbal Redirection', 'Physical assist/prompt', 'Ignored problem behavior', 'Kept on demand', 'Verbal reprimand', 'Removed from activity', 'Given a different activity/task', 'Lost Privilege', 'Sent to room', 'Given a time out', 'Left alone'];

        this.abc = {};
        this.antecedentOtherDisabled = true;
        this.peopleOtherDisabled = true;
        this.behaviorOtherDisabled = true;
        this.consequenceOtherDisabled = true;
        this.messages = [];
        this.phpHTML = "";
        this.user = {
            when: "",
            antecedent: "",
            antecedentOther: "",
            location: "",
            people: [],
            peopleOther: "",
            behavior: [],
            behaviorOther: "",
            duration: "",
            intensity: "",
            consequence: [],
            consequenceOther: ""
        };
    }

    togglePerson(person) {
        var idx = this.user.people.indexOf(person);
        if (idx > -1) {
            this.user.people.splice(idx, 1);
        } else {
            this.user.people.push(person);
        }
    }

    toggleBehavior(behavior) {
        var idx = this.user.behavior.indexOf(behavior);
        if (idx > -1) {
            this.user.behavior.splice(idx, 1);
        } else {
            this.user.behavior.push(behavior);
        }
    }

    toggleConsequence(consequence) {
        var idx = this.user.consequence.indexOf(consequence);
        if (idx > -1) {
            this.user.consequence.splice(idx, 1);
        } else {
            this.user.consequence.push(consequence);
        }
    }

    save(user) {
        this.abc = angular.copy(user);
        console.dir(this.abc);
        if (!this.validSave()) {
            this.open(false);
        } else {
            this.postToPhp();
        }
    }

    reset() {
        this.user = {people: [], behavior: [], consequence: []};
    }

    getTime() {
        var time = new Date();
        this.user.when = time.toLocaleString();
    }

    peopleOtherText() {
        this.togglePerson('Other');
        if (this.peopleOtherDisabled) {
            this.peopleOtherDisabled = false;
        } else {
            this.peopleOtherDisabled = true;
            this.user.peopleOther = "";
        }
    }

    antecedentOtherText(name) {
        if (name === "Other") {
            this.antecedentOtherDisabled = false;
        } else {
            this.antecedentOtherDisabled = true;
            this.user.antecedentOther = "";
        }
    }

    behaviorOtherText() {
        this.toggleBehavior('Other');
        if (this.behaviorOtherDisabled) {
            this.behaviorOtherDisabled = false;
        } else {
            this.behaviorOtherDisabled = true;
            this.user.behaviorOther = "";
        }
    }

    consequenceOtherText() {
        this.toggleConsequence('Other');
        if (this.consequenceOtherDisabled) {
            this.consequenceOtherDisabled = false;
        } else {
            this.consequenceOtherDisabled = true;
            this.user.consequenceOther = "";
        }
    }

    open(reset) {
        var errors = this.messages;
        var html = this.phpHTML;
        var modalInstance = this.modal.open({
            animation: false,
            template: require('./messageModal.html'),
            controller: 'AbcModalController',
            controllerAs: 'modal',
            size: 'lg',
            resolve: {
                messages: function () {
                    return errors;
                },
                html: function () {
                    return html;
                }
            }
        });

        if (reset) {
            modalInstance.result.then(r => this.reset, r => this.reset);
        }
    }

    postToPhp() {
        this.http.post('abc.php', JSON.stringify(this.abc)).then(response => this.phpGood(response), response => this.phpBad(response));
    }

    phpGood(response) {
        this.phpHTML = response.data;
        this.open(true);
    }

    phpBad(response) {
        this.messages.push(response);
        this.open(true);
        console.log(this.messages);
    }

    validSave() {
        this.messages = [];
        if (!this.abc.people || this.abc.people.length === 0) {
            this.messages.push("At least one Person is required to save.");
        } else {
            if (this.abc.people.indexOf("Other") === 0) {
                if (!this.abc.peopleOther || this.abc.peopleOther === "") {
                    this.messages.push("For People - Other, the text description of Other must be entered.");
                }
            } else {
                this.abc.peopleOther = "";
            }
        }
        if (!this.abc.behavior || this.abc.behavior.length === 0) {
            this.messages.push("At least one Behavior is required to save.");
        } else {
            if (this.abc.behavior.indexOf("Other") === 0) {
                if (!this.abc.behaviorOther || this.abc.behaviorOther === "") {
                    this.messages.push("For Behavior - Other, the text description of Other must be entered.");
                }
            } else {
                this.abc.behaviorOther = "";
            }
        }
        if (!this.abc.consequence || this.abc.consequence.length === 0) {
            this.messages.push("At least one Consequence is required to save.");
        } else {
            if (this.abc.consequence.indexOf("Other") === 0) {
                if (!this.abc.consequenceOther || this.abc.consequenceOther === "") {
                    this.messages.push("For Consequence - Other, the text description of Other must be entered.");
                }
            } else {
                this.abc.consequenceOther = "";
            }
        }
        if (!this.abc.antecedent) {
            this.messages.push("An Antecedent is required to save.");
        } else {
            if (this.abc.antecedent === "Other") {
                if (!this.abc.antecedentOther || this.abc.antecedentOther === "") {
                    this.messages.push("For Antecedent - Other, the text description of Other must be entered.");
                }
            } else {
                this.abc.antecedentOther = "";
            }
        }
        if (!this.abc.location) {
            this.messages.push("A Location is required to save.");
        }
        if (!this.abc.duration) {
            this.messages.push("A Duration is required to save.");
        }
        if (!this.abc.intensity) {
            this.messages.push("An Intensity is required to save.");
        }
        if (!this.abc.when) {
            this.messages.push("The date and time of the ABC is required to save.");
        }

        return this.messages.length === 0;
    }
}

AbcController.$inject = ['$http', '$uibModal'];
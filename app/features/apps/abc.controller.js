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

    this.reset();
  }

  save() {
    if (!this.validSave()) {
      this.open(false);
    } else {
      this.postToPhp();
    }
  }

  reset() {
    this.antecedentOtherDisabled = true;
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

  getTime() {
    var time = new Date();
    this.user.when = time.toLocaleString();
  }

  antecedentOtherText(name) {
    if (name === "Other") {
      this.antecedentOtherDisabled = false;
    } else {
      this.antecedentOtherDisabled = true;
      this.user.antecedentOther = "";
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
        messages: function() {
          return errors;
        },
        html: function() {
          return html;
        }
      }
    });

    if (reset) {
      modalInstance.result.then(() => this.reset(), () => this.reset());
    }
  }

  postToPhp() {
    this.http.post('abc.php', JSON.stringify(this.user)).then(response => this.phpGood(response), response => this.phpBad(response));
  }

  phpGood(response) {
    this.phpHTML = response.data;
    this.open(true);
  }

  phpBad(response) {
    this.messages.push(response);
    this.open(false);
  }

  validSave() {
    this.messages = [];
    if (!this.user.people || this.user.people.length === 0) {
      this.messages.push("At least one Person is required to save.");
    } else {
      if (this.user.people.indexOf("Other") === 0) {
        if (!this.user.peopleOther || this.user.peopleOther === "") {
          this.messages.push("For People - Other, the text description of Other must be entered.");
        }
      } else {
        this.user.peopleOther = "";
      }
    }
    if (!this.user.behavior || this.user.behavior.length === 0) {
      this.messages.push("At least one Behavior is required to save.");
    } else {
      if (this.user.behavior.indexOf("Other") === 0) {
        if (!this.user.behaviorOther || this.user.behaviorOther === "") {
          this.messages.push("For Behavior - Other, the text description of Other must be entered.");
        }
      } else {
        this.user.behaviorOther = "";
      }
    }
    if (!this.user.consequence || this.user.consequence.length === 0) {
      this.messages.push("At least one Consequence is required to save.");
    } else {
      if (this.user.consequence.indexOf("Other") === 0) {
        if (!this.user.consequenceOther || this.user.consequenceOther === "") {
          this.messages.push("For Consequence - Other, the text description of Other must be entered.");
        }
      } else {
        this.user.consequenceOther = "";
      }
    }
    if (!this.user.antecedent) {
      this.messages.push("An Antecedent is required to save.");
    } else {
      if (this.user.antecedent === "Other") {
        if (!this.user.antecedentOther || this.user.antecedentOther === "") {
          this.messages.push("For Antecedent - Other, the text description of Other must be entered.");
        }
      } else {
        this.user.antecedentOther = "";
      }
    }
    if (!this.user.location) {
      this.messages.push("A Location is required to save.");
    }
    if (!this.user.duration) {
      this.messages.push("A Duration is required to save.");
    }
    if (!this.user.intensity) {
      this.messages.push("An Intensity is required to save.");
    }
    if (!this.user.when) {
      this.messages.push("The date and time of the ABC is required to save.");
    }

    return this.messages.length === 0;
  }
}

AbcController.$inject = ['$http', '$uibModal'];

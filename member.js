function skillsMember() {
    // Get the current user's ID
    var userID = firebase.auth().currentUser.uid;

    // Get the current user's name
    var userName = firebase.auth().currentUser.displayName;

    // Get the user's skills
    var userSkills = firebase.database().ref('users/' + userID + '/skills');

    userSkills.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var skill = childSnapshot.val();
            var skillName = skill.name;
            var skillLevel = skill.level;

            // Do something with the skill
        });
    });
}
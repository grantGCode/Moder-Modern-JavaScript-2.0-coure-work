const age = 27;

// creating a way to seen if someone can vote

// Useing if statment

if (age >= 18) {
    console.log('You can vote!')
} else {
    console.log('You can not vote')
}


// Using a ternary operatior (?)

    age >= 18 ? console.log('You can vote!') : console.log
    ('You can not vote');

// Assigining a conditional value to a varibale

    const canVote = age >= 18 ? true : false;

    const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote'; // sting added in place of Boolean
    console.log(canVote);
    console.log(canVote2);

// Multipale Statments

    const auth = true
    // let redirect;


    // if (auth) {
    //     alert('Welcome to dashborad');
    //     redirect = '/dashboard';
    // } else {
    //     alert('Acces denied');
    //     redirect = '/Login';
    // }


    const redirect = auth ? (alert('Welcome to dashborad'), '/dashborad') : (alert('acces denied'), '/login')
    
    console.log(redirect);
        
    
    
        // Use & as a short hand if no else statment

            // auth ? console.log('Welcome to dashborad') : null;

            // auth & console.log('Welcome to dashborad');
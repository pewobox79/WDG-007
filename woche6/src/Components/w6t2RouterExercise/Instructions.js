const Instructions = () => {
    return (
      <div className="block">
        For this exercise, you will have to:
        <ol>
          <li>
            Install <b>react-router-dom</b>, then import the router and wrap your
            component tree with it (see previous exercises).
          </li>
          <li>
            Create a component named <em>{"<Students>"}</em> that will display
            information about all the students. You can pass the prepared{" "}
            <b>students</b> list as props. Clicking on the Students button in the
            navbar should display all students and update the url to{" "}
            <b>/students</b>
          </li>
          <li>
            When one of the navbar item is selected, the text should be
            highlighted in white.
          </li>
          <li>
            It should be possible to click on the name of a single student from
            the list in order to view the info regarding that specific student.
            The URL should be updated accordingly to <b>/students/{"<someId>"}</b>
          </li>
          <li>
            Create a second component named <em>{"<Results>"}</em> that will
            display <b>the students' grade for each subject</b>. You can pass the
            prepared <b>students</b> and <b>subjects</b> lists as props (the
            grades themselves do not really matter, make up something random!).
          </li>
          <hr />
          <li>
            <b>BONUS/EXTRA:</b> It should be possible to click on the name of a
            single student inside the results list, in order to view the
            information only for that specific student. The route should be:{" "}
            <b>/results/{"<someId>"}</b>
          </li>
          <li>
            <b>BONUS/EXTRA:</b> When I check a student's specific info (on the
            route <b>/students/{"<someId>"}</b>), it should be possible to click
            on "See results". This will take me to <b>/results/{"<someId>"}</b>{" "}
            and I will see the results only for that specific student.
          </li>
          <li>
            <b>BONUS/EXTRA:</b> On the students and results page, I should have a
            "Go back" button. When I click on it, it will alert me "Going back to
            the main page", and change the url back to /. This feature should not
            use a Link or NavLink.
          </li>
        </ol>
        <div>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactrouter.com/docs/en/v6/getting-started/concepts#match-params"
          >
            Help{" "}
          </a>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactrouter.com/docs/en/v6/api#useparams"
          >
            Help{" "}
          </a>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactrouter.com/docs/en/v6/getting-started/concepts#link"
          >
            Help{" "}
          </a>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gomakethings.com/chaining-array-methods-in-vanilla-js/"
          >
            Help{" "}
          </a>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactrouter.com/docs/en/v6/api#outlet"
          >
            Help{" "}
          </a>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactrouter.com/docs/en/v6/getting-started/concepts#navigate-function"
          >
            Help{" "}
          </a>
        </div>
      </div>
    );
  };
  
  export default Instructions;
  
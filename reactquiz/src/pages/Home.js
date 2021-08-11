import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import { MenuItem, TextField, Button } from "@material-ui/core";
import Categories from "../data/Categories";
import ErrorMessage from "../components/ErrorMessage";
import { useHistory } from "react-router";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (error) {
        setError(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [error]);
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>Please Select All The Fields</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            style={{
              marginBottom: 25,
              backgroundColor: "#c9c8d3",
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 25, backgroundColor: "#c9c8d3" }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            value={difficulty}
            style={{
              marginBottom: 25,
              backgroundColor: "#c9c8d3",
            }}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

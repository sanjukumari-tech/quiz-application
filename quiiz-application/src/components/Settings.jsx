import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setSettings, fetchQuestions } from '../redux/actions/quizActions';
import { Button, Select, Input } from '@chakra-ui/react';
// import './styles.css';

const Settings = ({ startQuiz }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.quiz.categories);
  const [settings, updateSettings] = useState({
    amount: 10,
    category: '',
    difficulty: 'easy',
    type: 'multiple'
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSettings({ ...settings, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(setSettings(settings));
    dispatch(fetchQuestions(settings));
    startQuiz();
  };

  return (
    <div className="container settings">
      <Select name="category" onChange={handleChange} placeholder="Select Category">
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </Select>
      <Select name="difficulty" onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
      <Select name="type" onChange={handleChange}>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True/False</option>
      </Select>
      <Input name="amount" type="number" value={settings.amount} onChange={handleChange} />
      <Button className="settings-button" onClick={handleSubmit}>Start Quiz</Button>
    </div>
  );
};

export default Settings;

import { useGlobalContext } from "../Context/Context";
const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}>
              <option value='sports'>Sports</option>
              <option value='computer'>Computer Science</option>
              <option value='series'>Tv Series</option>
              <option value='anime'>Anime</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              onChange={handleChange}
              value={quiz.difficulty}>
              <option value='ease'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>difficult</option>
            </select>
          </div>
          {error && (
            <p className='error'>can't generates questions , pls try again</p>
          )}
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};
export default SetupForm;

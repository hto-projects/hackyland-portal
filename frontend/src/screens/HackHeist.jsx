import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useSubmitKeywordsMutation } from '../slices/quizApiSlice';
import { toast } from 'react-toastify';

const HackHeistSubmission = () => {
  const initKeywords  = [];
  const numKeywords = 10;
  for (let i = 0; i < numKeywords; i++) {
    initKeywords.push({
      val: '',
      bg: 'white'
    });
  }

  const [keywords, setKeywords] = useState(initKeywords);

  const [submitKeywords, { isLoading }] = useSubmitKeywordsMutation();

  const setKeywordValue = (idx, value) => {
    const newKeywords = [...keywords];
    newKeywords[idx].val = value;
    newKeywords[idx].bg = 'white';
    setKeywords(newKeywords);
  };

  const setKeywordBg = (idx, bg) => {
    const newKeywords = [...keywords];
    newKeywords[idx].bg = bg;
    setKeywords(newKeywords);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await submitKeywords({ keywords: keywords.map(k => k.val) }).unwrap();
      for (let i = 0; i < numKeywords; i++) {
        if (res.incorrectIdxs.includes(i)) {
          setKeywordBg(i, 'var(--light-pink)');
        } else {
          setKeywordBg(i, 'var(--light-green)');
        }
      }
      
      if (res.incorrectIdxs.length > 0) {
        toast.error(res.message);
      } else {
        toast(res.message);
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>The Scavenger&apos;s Key</h1>
      <p>Enter the correct keywords to reveal the combination. Note that keywords are case-sensitive.</p>
      <Form onSubmit={submitHandler}>
        {keywords.map((keyword, idx) => (
          <Form.Group className='my-2' controlId={`keyword${idx}`} key={idx}>
            <Form.Label>Keyword {idx + 1}</Form.Label>
            <Form.Control
              type='name'
              placeholder={`Enter keyword ${idx + 1}`}
              value={keyword.val}
              style={{background: keyword.bg}}
              required={false}
              onChange={(e) => setKeywordValue(idx, e.target.value)}
              ></Form.Control>
          </Form.Group>
        ))}
        
        <Button type='submit' variant='primary' className='mt-3'>
          Check Keywords
        </Button>

        {isLoading && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default HackHeistSubmission;

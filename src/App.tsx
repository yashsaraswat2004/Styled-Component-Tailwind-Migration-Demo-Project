
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {

  const steps = [
    { title: 'Step 1: Introduction', link: '/step1' },
    { title: 'Step 2: Basics', link: '/step2' },
    { title: 'Step 3: Advanced', link: '/step3' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar steps={steps}/>
      <div style={{ marginLeft: '450px', transition: 'margin-left 0.3s', padding: '20px', width: '100%' }}>
        <Routes>
          <Route path="/step1" element={<h1>Step 1: Introduction</h1>} />
          <Route path="/step2" element={<h1>Step 2: Basics</h1>} />
          <Route path="/step3" element={<h1>Step 3: Advanced</h1>} />
          <Route path="/" element={<h1>Welcome to Template Playground CSS Migration Demo Project</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
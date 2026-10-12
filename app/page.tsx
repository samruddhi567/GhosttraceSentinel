'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  FileText, 
  Image as ImageIcon, 
  Code2, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight 
} from 'lucide-react';

export default function GhostTraceDashboard() {
  const [brd, setBrd] = useState('Require a secure login API using JWT authentication, password hashing with bcrypt, and Redis rate-limiting (max 5 attempts/min).');
  const [design, setDesign] = useState('System Diagram: React Frontend -> FastAPI Gateway -> Redis Middleware (Rate Limit) -> Auth Service -> PostgreSQL DB.');
  const [code, setCode] = useState(`app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // TODO: Add rate limiting check
  const user = await db.query("SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'");
  res.json({ token: "12345" });
});`);

  const [audit, setAudit] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = async () => {
    setLoading(true);
    setAudit(null);

    const formData = new FormData();
    formData.append('business_requirements', brd);
    formData.append('design_notes', design);
    formData.append('git_code', code);

    try {
      const res = await fetch('http://localhost:8000/api/verify-commit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setAudit(data);
    } catch (err) {
      alert('Backend connection error! Ensure FastAPI is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#090d16', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Top Navigation Bar */}
      <nav style={{ borderBottom: '1px solid #1e293b', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ backgroundColor: '#0284c7', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
            <ShieldCheck size={24} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, letterSpacing: '-0.5px' }}>
              GhostTrace <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 'normal', marginLeft: '0.5rem', padding: '0.2rem 0.6rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>v2.0 Sentinel</span>
            </h1>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>DevOps Real-Time Gatekeeper & Three-Way Alignment Auditor</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            Llama 3.2 Engine Active
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <div style={{ padding: '2rem', maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* LEFT COLUMN: Input Artifacts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Section 1: BRD */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <FileText size={18} color="#38bdf8" />
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>1. Business Requirements (BRD)</span>
            </div>
            <textarea
              value={brd}
              onChange={(e) => setBrd(e.target.value)}
              rows={3}
              style={textareaStyle}
              placeholder="Paste business requirements or user stories..."
            />
          </div>

          {/* Section 2: Design Diagram / Architecture */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <ImageIcon size={18} color="#a855f7" />
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>2. Design Specs & Diagram Context</span>
            </div>
            <textarea
              value={design}
              onChange={(e) => setDesign(e.target.value)}
              rows={3}
              style={textareaStyle}
              placeholder="Describe system components, database choices, or middleware..."
            />
          </div>

          {/* Section 3: Git Code */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <Code2 size={18} color="#22c55e" />
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>3. Staged Git Code</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={8}
              style={{ ...textareaStyle, fontFamily: 'Fira Code, monospace', color: '#e2e8f0' }}
            />
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleAudit}
            disabled={loading}
            style={{
              padding: '1rem',
              backgroundColor: loading ? '#334155' : '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)',
              transition: 'all 0.2s'
            }}
          >
            {loading ? (
              <>
                <RefreshCw className="animate-spin" size={20} />
                Auditing Artifacts & Evaluating Gatekeeper Rules...
              </>
            ) : (
              <>
                <Play size={20} /> Verify Commit & Run Alignment Audit
              </>
            )}
          </button>
        </div>

        {/* RIGHT COLUMN: Real-Time Audit Report */}
        <div>
          <div style={{ ...cardStyle, minHeight: '620px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ ...cardHeaderStyle, borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem' }}>
              <ShieldCheck size={20} color="#38bdf8" />
              <span style={{ fontWeight: '600', fontSize: '1rem' }}>DevOps Audit Report</span>
            </div>

            {audit ? (
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                
                {/* Status Badge & Score Header */}
                <div style={{
                  backgroundColor: audit.status === 'APPROVED' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${audit.status === 'APPROVED' ? '#22c55e' : '#ef4444'}`,
                  borderRadius: '10px',
                  padding: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {audit.status === 'APPROVED' ? (
                      <CheckCircle2 size={32} color="#22c55e" />
                    ) : (
                      <ShieldAlert size={32} color="#ef4444" />
                    )}
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        color: audit.status === 'APPROVED' ? '#22c55e' : '#ef4444',
                        textTransform: 'uppercase'
                      }}>
                        COMMIT GATE {audit.status}
                      </span>
                      <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
                        {audit.status === 'APPROVED' ? 'Code Aligned & Safe to Commit' : 'Commit Blocked Due to Misalignment'}
                      </h3>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: audit.status === 'APPROVED' ? '#22c55e' : '#ef4444' }}>
                      {audit.alignment_score}<span style={{ fontSize: '1rem', color: '#64748b' }}>/100</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Alignment Score</span>
                  </div>
                </div>

                {/* Audit Summary */}
                <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #1e293b' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Executive Summary</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#cbd5e1' }}>{audit.summary}</p>
                </div>

                {/* Discrepancies */}
                <div>
                  <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <AlertTriangle size={16} /> Discrepancies & Violations ({audit.discrepancies?.length || 0})
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {audit.discrepancies?.map((item: string, i: number) => (
                      <div key={i} style={{ backgroundColor: '#1e1b2e', borderLeft: '3px solid #ef4444', padding: '0.75rem', borderRadius: '4px', fontSize: '0.85rem', color: '#fca5a5' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ArrowRight size={16} /> Required Fixes Before Commit
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {audit.recommendations?.map((item: string, i: number) => (
                      <div key={i} style={{ backgroundColor: '#0f2744', borderLeft: '3px solid #38bdf8', padding: '0.75rem', borderRadius: '4px', fontSize: '0.85rem', color: '#93c5fd' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* Empty State */
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#475569', padding: '3rem', textAlign: 'center' }}>
                <ShieldCheck size={64} color="#1e293b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#64748b' }}>Gatekeeper Ready</h3>
                <p style={{ fontSize: '0.85rem', maxWidth: '320px', margin: 0, lineHeight: '1.5' }}>
                  Provide your requirements, design specs, and staged code on the left panel to execute a full Llama 3.2 alignment audit.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

// Styling Constants
const cardStyle = {
  backgroundColor: '#0f172a',
  border: '1px solid #1e293b',
  borderRadius: '12px',
  padding: '1rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
};

const cardHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.75rem',
  color: '#cbd5e1'
};

const textareaStyle = {
  width: '100%',
  backgroundColor: '#090d16',
  color: '#f8fafc',
  border: '1px solid #1e293b',
  borderRadius: '8px',
  padding: '0.75rem',
  fontSize: '0.85rem',
  outline: 'none',
  resize: 'vertical' as const,
  boxSizing: 'border-box' as const
};
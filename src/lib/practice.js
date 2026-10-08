export const STORAGE_KEY='jamb-studio-v1';
export const SUBJECTS=['Use of English','Biology','Chemistry','Physics'];
export function emptyDatabase(){return {profiles:[],current:null}}
export function parseDatabase(raw){if(!raw)return emptyDatabase();const value=JSON.parse(raw);if(!Array.isArray(value.profiles)||value.profiles.some(p=>!p.id||!p.handle||!Array.isArray(p.attempts)))throw new Error('Invalid saved profiles');return value}
export function createAttempt(bank,subject,count,minutes,now=Date.now()){const questions=bank.filter(q=>subject==='all'||q.subject===subject).slice();for(let i=questions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[questions[i],questions[j]]=[questions[j],questions[i]]}const n=count==='all'?questions.length:Math.min(Number(count),questions.length);if(!n)throw new Error('No questions available');return {id:crypto.randomUUID(),subject:subject==='all'?'Mixed practice':subject,questions:questions.slice(0,n),answers:{},flags:{},index:0,started:now,deadline:now+Number(minutes)*60000}}
export function gradeAttempt(a,now=Date.now()){const correct=a.questions.filter(q=>a.answers[q.id]===q.answer).length;return {...a,finished:now,correct,percent:Math.round(correct/a.questions.length*100)}}
export function completeAttempt(db,userId,now=Date.now()){return {...db,profiles:db.profiles.map(p=>p.id===userId&&p.active?{...p,attempts:[...p.attempts,gradeAttempt(p.active,now)],active:null}:p)}}
export function secondsRemaining(a,now=Date.now()){return Math.max(0,Math.ceil((a.deadline-now)/1000))}
export async function hashPin(handle,pin){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(handle+':'+pin)))).map(x=>x.toString(16).padStart(2,'0')).join('')}

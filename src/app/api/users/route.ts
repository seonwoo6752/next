import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 사용자 목록 조회
  const users = [
    { id: 1, name: '사용자1', email: 'user1@example.com' },
    { id: 2, name: '사용자2', email: 'user2@example.com' }
  ];
  
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 사용자 생성 로직
    const newUser = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString()
    };
    
    return NextResponse.json({ 
      message: '사용자 생성 완료', 
      user: newUser 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      error: '사용자 생성 실패' 
    }, { status: 500 });
  }
}



import { NextRequest, NextResponse } from 'next/server'

const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/lzvjdnasvjbj3'

export async function POST(req: NextRequest) {
  try{
    const body = await req.json()

    // SheetDB expects { data: [ {col: value} ] }
    const payload = { data: [ body ] }

    const res = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if(!res.ok){
      const txt = await res.text()
      return NextResponse.json({ success: false, error: txt }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  }catch(err){
    console.error(err)
    return NextResponse.json({ success: false, error: 'server error' }, { status: 500 })
  }
}
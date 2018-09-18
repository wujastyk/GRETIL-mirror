function writeTOC0()

{
for (i=1; i<=parent.maxB; i++)
{
document.write("<p class=min><a href='JavaScript:books("+i+",1)'>Book "+i+" "+parent.titles[i]+"</a></p>");
}
}

function writeTOC()
{
splitParts=this.location.href.split("/");
myName=splitParts[splitParts.length-1];
me=parseInt(myName.substring(5,7));
for (i=1; i<=me; i++) {
   document.writeln("<p class=min><a href='JavaScript:books("+i+",0)'>Book "+i+" "+parent.titles[i]); }

for (i=1; i<=parent.maxCh[me]; i++) {
   document.writeln("<p class=min><a href='JavaScript:chapters(me,"+ i +")'>Chapter "+ i + "</a></p>"); }

for (i=me+1; i<=parent.maxB; i++) {
   document.writeln("<p class=min><a href='JavaScript:books("+i+",1)'>Book "+i+" "+parent.titles[i]); }
}

function previousChapter()
{
b=parent.b;
c=parent.c;
c--;
if ( c >= 1 ) { chapters(b,c); }
else {
   b--; 
   if ( b >= 1 ) { c = parent.maxCh[b]; chapters(b,c); }
   else { chapters(1,1); }
      }
}

function nextChapter()
{
b=parent.b;
c=parent.c;
c++;
if ( c <= parent.maxCh[b] ) { chapters(b,c); }
else {
   b++; 
   if ( b <= parent.maxB ) { c = 1; chapters(b,c); }
      }
}

function chapters(b,c) 
{

parent.b = b;
parent.c = c;
if (b<10)   { book = "b0"+b; }     else { book = "b" + b; }
if (c<10)   { chapter = "c00"+c; } else {
if (c<100)  { chapter = "c0"+c; }  else {
if (c<1000) { chapter = "c"+c; } }}
link = book+"/"+book+chapter+".htm";
parent.frames[3].location.href=link;
}
function books(b,x) 
{
var p = parent.b;
parent.b = b;
parent.c = 1;

if (b<10)   { book = "b0"+b; }     else { book = "b" + b; }
link = book+"/"+book+"c001.htm";
nav = "nav_"+book+".htm";
parent.frames[3].location.href=link; 
if (x==1) { parent.frames[2].location.href=nav; }
else { parent.frames[2].location.href="navigat.htm" };
}
function reset() 
{
 parent.frames[2].location.href="navigat.htm"
}

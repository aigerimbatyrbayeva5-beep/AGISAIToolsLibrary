Create a modern, responsive educational website called **“AI Tools Library for Educators”**.

The website will be used by teachers at a K–12 international school to discover appropriate AI tools for teaching, learning, assessment, lesson planning, content creation and productivity.

I am using a **Figma Education account**. Build the website so that it can later be published and maintained through Figma Sites and, where possible, Figma CMS. Avoid solutions that require paid third-party plugins.

## MAIN GOAL

The website should function as a searchable and visually engaging **catalog of AI tools for educators**, not as a marketing landing page.

Teachers should be able to quickly answer:

* What AI tool can help me with this task?
* Is it free?
* Do I need to register?
* What can I create with it?
* What are its limitations?
* Is it suitable for education?
* What languages does it support?
* What are its advantages and disadvantages?

The design should be professional enough for a school-wide resource but simple and intuitive for teachers who are not technology experts.

---

# 1. DESIGN STYLE

Create a clean, modern educational interface inspired by high-quality SaaS directories.

Visual direction:

* modern
* minimal
* professional
* friendly
* spacious
* easy to scan
* slightly playful but not childish

Use:

* white or very light background
* rounded cards
* subtle shadows
* generous whitespace
* clear typography
* small category icons
* pill-shaped tags
* simple educational illustrations where appropriate
* accessible contrast

Do not make the page overly colorful.

Use one primary accent color with a few soft supporting colors for categories.

Typography should feel modern and highly readable.

Design desktop, tablet and mobile layouts.

---

# 2. HEADER

Create a sticky navigation header.

Left:
**AI Tools Library**

Optional subtitle/logo:
**AI for Education**

Navigation:

* Home
* Explore Tools
* Categories
* About

Right:

* Search icon
* EN / RU language selector

Add a prominent button:

**Explore AI Tools**

---

# 3. HOMEPAGE HERO

Create a welcoming hero section.

Headline:

**Find the right AI tool for your teaching**

Supporting text:

**Explore AI-powered tools for lesson planning, assessment, differentiation, content creation, research and more.**

Add a large central search bar:

🔍 **Search AI tools, tasks or features...**

Placeholder examples:
“lesson planning”
“presentation”
“assessment”
“differentiate a text”
“generate quiz”

Add a primary CTA:

**Explore all tools**

Secondary CTA:

**Browse by category**

---

# 4. QUICK CATEGORY SECTION

Below the hero create:

## Browse by what you want to do

Create interactive category cards for:

* Lesson Planning
* Assessment & Feedback
* Differentiation
* Presentations
* Worksheets & Resources
* Research
* Writing
* Images & Design
* Video
* Productivity
* Coding
* Student Activities

Each category should have:

* simple icon
* category title
* number of available tools placeholder

Example:

📊
**Assessment & Feedback**
12 tools

Cards should be clickable and lead to filtered catalog results.

---

# 5. AI TOOLS CATALOG

Create a dedicated page called:

# Explore AI Tools

At the top include:

**Search AI Tools**

Large search field:
“Search by tool, feature or teaching task…”

Below it create filtering controls.

### Filters

**Purpose**

* Lesson Planning
* Assessment
* Feedback
* Differentiation
* Content Creation
* Research
* Presentations
* Images
* Video
* Productivity
* Coding

**Pricing**

* Free
* Freemium
* Paid

**Registration**

* Registration required
* No registration required

**User**

* Teacher
* Student
* Teacher & Student

**Language**

* English
* Russian
* Kazakh
* Multilingual

**Output**

* PDF
* Word
* Google Docs
* Google Slides
* PowerPoint
* Images
* Video
* Text

Use a clean filter sidebar on desktop.

On mobile, place filters inside a **Filter** button / drawer.

Include:

**Sort by**

* Recommended
* A–Z
* Recently Added

Also show:

**32 AI tools found**

---

# 6. AI TOOL CARDS

Create a reusable CMS-ready component for every AI tool.

Each card should contain:

Tool logo placeholder

**Tool Name**

Short one-sentence purpose.

Example:

**MagicSchool AI**

AI assistant designed specifically for K–12 teachers.

Tags such as:

`Lesson Planning`
`Assessment`
`Teacher`
`Freemium`

Add useful status indicators:

✓ Free plan
✓ Multilingual
🔒 Registration required

Add:

**Best for:** Lesson planning, feedback and differentiation

Buttons:

**View details**

and a smaller external-link button:

**Visit tool ↗**

Cards should have consistent height and clear hierarchy.

Include hover interaction.

---

# 7. FEATURED TOOLS

On the homepage create:

## Featured AI Tools

Show 4–6 featured cards.

Use sample tools:

* MagicSchool AI
* Diffit
* Eduaide.AI
* Gamma
* Canva
* ChatGPT

Add:

**View all AI tools →**

---

# 8. INDIVIDUAL AI TOOL PAGE

Create a CMS-template page that can automatically be reused for every AI tool.

Example:

# MagicSchool AI

Header area:

* logo
* tool name
* short description
* category tags
* **Visit MagicSchool AI ↗** button

Then create sections:

## Overview

Short explanation of the tool.

## What can you do with it?

Display functions as visual tags/cards.

Example:

* Worksheets
* Tests
* Lesson plans
* Assessment
* Feedback
* Rubrics

## Best for teachers

Explain typical teacher tasks.

Example:

* Preparing lessons
* Generating feedback
* Differentiating activities
* Creating assessments

## Access & Pricing

Use a clear information table:

Registration: Yes
Free Plan: Yes
No-registration access: No
Languages: Multilingual
Export formats: PDF, Word, Google Docs
Free-version limitations: [text]

Use icons/checkmarks where appropriate.

## Advantages

Use a green/light positive information card.

Example:
“Large collection of specialized templates designed for educators.”

## Limitations

Use a neutral or soft warning information card.

Example:
“Some advanced functions are only available with the Pro plan.”

## How could I use this in my classroom?

Add 3 practical examples.

Example:

**Lesson Planning**
Generate a draft lesson structure and adapt it to your learning objectives.

**Differentiation**
Create different versions of the same material for varying student ability levels.

**Assessment**
Generate formative questions, rubrics or feedback prompts.

At the bottom:

### Similar AI Tools

Display 3–4 related cards.

---

# 9. CMS / DATABASE STRUCTURE

Prepare the site structure so AI tools can later be imported into a CMS from CSV/Excel.

Create CMS fields corresponding to this existing database:

* Tool Name
* Domain / URL
* Purpose
* Functions
* Teacher Tasks
* Registration Required
* Free Plan
* Free Plan Limitations
* Available Without Registration
* Export Formats
* Languages
* Advantages
* Disadvantages

Also add useful future fields:

* Logo
* Category
* Subcategory
* Target User
* School Level
* Featured
* Recommended
* Date Added
* Last Reviewed
* Privacy / Data Note

Build cards and individual pages using these fields instead of manually creating separate layouts.

---

# 10. “FIND A TOOL” SECTION

Create an interactive section on the homepage:

## What do you want AI to help you with?

Display task buttons such as:

“I need to plan a lesson”

“I need to create a quiz”

“I need a presentation”

“I need to differentiate a text”

“I need to generate an image”

“I need to give students feedback”

“I need help with research”

“I want students to use AI”

Clicking a task should conceptually take the user to the relevant filtered catalog.

---

# 11. SCHOOL / RESPONSIBLE AI SECTION

Add a compact section:

## Use AI Responsibly

Text:

**AI tools should support—not replace—professional judgment, creativity and academic integrity. Always consider privacy, age restrictions and your school’s AI policy before using a tool with students.**

Buttons:

**Read AI Guidelines**

**Learn about Responsible AI**

Use a simple shield or responsible-AI icon.

---

# 12. ABOUT PAGE

Create a simple page explaining:

# About the AI Tools Library

This library helps educators discover AI tools that can support teaching, learning and productivity.

Tools are organized according to their educational purpose, functions, accessibility and limitations.

Include:

### How tools are evaluated

* Educational usefulness
* Accessibility
* Free functionality
* Ease of use
* Language support
* Export options
* Potential classroom applications
* Limitations

Add a disclaimer:

**AI products and pricing change frequently. Information in this library should be periodically reviewed and verified on the provider's official website.**

---

# 13. FOOTER

Include:

**AI Tools Library for Educators**

Links:

* Explore Tools
* Categories
* About
* Responsible AI
* AI Policy

Add:

**Built for educators**

and a small disclaimer:

“Tool availability, features and pricing may change.”

---

# 14. UX REQUIREMENTS

The most important priority is usability.

A teacher should be able to find a relevant tool within approximately 30 seconds.

Prioritize:

1. Search
2. Categories
3. Filters
4. Clear tool descriptions
5. Free/paid information
6. Practical educational applications

Avoid:

* excessive animations
* long blocks of text
* complicated navigation
* overly technical terminology
* cluttered dashboards

Use progressive disclosure: cards should contain only essential information, while the individual tool page contains detailed information.

---

# 15. COMPONENTS

Create reusable components for:

* Header
* Search Bar
* Category Card
* AI Tool Card
* Filter Chip
* Pricing Badge
* Category Tag
* Status Badge
* CTA Button
* Tool Information Table
* Advantage Card
* Limitation Card
* Related Tool Card
* Footer

Use Auto Layout and reusable component variants.

Make all components responsive.

---

# 16. FINAL RESULT

Generate a complete, polished website prototype with:

1. Home page
2. AI Tools Catalog
3. Individual Tool Detail template
4. About page
5. Desktop layout
6. Mobile responsive layout
7. Reusable components
8. CMS-ready content architecture

The final product should feel like a professional **educational AI directory** that a school could actually provide to teachers as its official AI resource hub.

Do not make it look like an AI startup advertisement. Make it look like a trustworthy, curated educational resource.

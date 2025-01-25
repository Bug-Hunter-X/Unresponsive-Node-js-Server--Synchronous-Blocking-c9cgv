# Unresponsive Node.js Server: Synchronous Blocking

This repository demonstrates a common Node.js issue: an unresponsive server caused by a long-running synchronous operation that blocks the event loop.  The `bug.js` file contains the problematic code. The solution, found in `bugSolution.js`, illustrates how to use asynchronous operations to prevent this issue.

## Problem

The server in `bug.js` performs a computationally intensive task synchronously. This prevents the event loop from processing other requests, leading to an unresponsive server.

## Solution

The `bugSolution.js` file demonstrates the solution using asynchronous operations. The long-running task is broken down into smaller, non-blocking chunks, allowing the event loop to remain responsive. This is crucial for building scalable and efficient Node.js applications.
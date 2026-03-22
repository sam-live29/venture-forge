import { createClient } from '@insforge/sdk';

const insforge = createClient({
  baseUrl: 'https://txtw4zep.us-east.insforge.app',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMTQxMDh9.1Q7cY7UKkCHqe1TSoU_VnZC-UefYLVKK_KfWpg4ajFc'
});

export { insforge };

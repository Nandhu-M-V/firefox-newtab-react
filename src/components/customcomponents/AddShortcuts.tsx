import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function AddShortcuts() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add shortcut</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg bg-[#42414D] border border-gray-500 rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-white">New shortcut</DialogTitle>
        </DialogHeader>

        <FieldGroup className="flex flex-col gap-4">
          <Field>
            <FieldLabel className="text-white">Title</FieldLabel>
            <Input placeholder="Enter a Title" />
          </Field>

          <Field>
            <FieldLabel className="text-white">URL</FieldLabel>
            <Input type="url" placeholder="Type or paste a URL" />
          </Field>

          <hr className="border-gray-500 my-2" />

          <Field orientation="horizontal" className="ml-auto gap-2">
            <Button variant="outline" type="reset">
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </DialogContent>
    </Dialog>
  );
}

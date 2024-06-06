from django.core.management.base import BaseCommand
from player.models import SongResposes

class Command(BaseCommand):
    
    
    help = 'Marks a response as having its demo rendered'

    def add_arguments(self, parser):
        parser.add_argument('response_id', type=int, help='The ID of the response to mark as having its demo rendered')

    def handle(self, *args, **options):
        response_id = options['response_id']
        try:
            response = SongResposes.objects.get(pk=response_id)
            response.demoCreated = True
            response.save()
            self.stdout.write(self.style.SUCCESS(f"Demo created flagged true for response {response_id} marked as True."))
        except SongResposes.DoesNotExist:
            self.stderr.write(self.style.ERROR(f"Response with ID {response_id} does not exist."))
